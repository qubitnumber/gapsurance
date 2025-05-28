import jwt from 'jsonwebtoken';

// Cache for the access token and its expiry
let cachedAccessToken: string;
let tokenExpiryTime: number = 0; // Timestamp in milliseconds

const DOCUSIGN_CLIENT_ID = process.env.DOCUSIGN_CLIENT_ID;
const DOCUSIGN_IMPERSONATED_USER_ID = process.env.DOCUSIGN_IMPERSONATED_USER_ID;
const DOCUSIGN_PRIVATE_KEY = process.env.DOCUSIGN_PRIVATE_KEY;
const DOCUSIGN_AUTH_SERVER = process.env.DOCUSIGN_AUTH_SERVER || 'account-d.docusign.com';


// Function to get a valid Docusign access token
export async function getDocusignAccessToken(): Promise<string> {
    const now = Date.now();

    // Use cached token if it's not expired (check with a buffer time, e.g., 60 seconds)
    if (cachedAccessToken && tokenExpiryTime > now + 60 * 1000) {
        console.log('Using cached Docusign access token.');
        return cachedAccessToken;
    }

    // Token expired or not cached, request a new one using JWT Grant
    console.log('Requesting new Docusign access token via JWT Grant...');

    if (!DOCUSIGN_CLIENT_ID || !DOCUSIGN_IMPERSONATED_USER_ID || !DOCUSIGN_PRIVATE_KEY) {
        throw new Error('Docusign JWT credentials or private key path missing.');
    }

    // Create the JWT payload
    const jwtPayload = {
        iss: DOCUSIGN_CLIENT_ID, // Integration Key (Client ID)
        sub: DOCUSIGN_IMPERSONATED_USER_ID, // Impersonated User ID (GUID)
        iat: Math.floor(now / 1000), // Issued At time (seconds since epoch)
        exp: Math.floor(now / 1000) + (60 * 60), // Expiry time (max 1 hour, in seconds)
        aud: DOCUSIGN_AUTH_SERVER, // Audience (auth server domain)
        scope: 'signature extended impersonation', // Required scopes for creating envelopes via impersonation
    };

    // Sign the JWT
    const signedJwt = jwt.sign(jwtPayload, DOCUSIGN_PRIVATE_KEY, { algorithm: 'RS256' });

    // Prepare the token request body
    const params = new URLSearchParams();
    params.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
    params.append('assertion', signedJwt);

    // Make the POST request to the token endpoint
    const tokenResponse = await fetch(`https://${DOCUSIGN_AUTH_SERVER}/oauth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Docusign JWT Token Exchange Error:', tokenResponse.status, tokenData);
      // Check for common JWT errors (e.g., consent not granted)
      if (tokenData.error === 'consent_required') {
        console.error('Consent required for impersonated user. Ensure the impersonated user has granted consent to your app.');
      }
      throw new Error('Failed to obtain Docusign access token via JWT Grant');
    }

    // Cache the new token and calculate expiry time
    cachedAccessToken = tokenData.access_token;
    tokenExpiryTime = now + (tokenData.expires_in * 1000); // expires_in is in seconds

    console.log('Successfully obtained and cached new Docusign access token.');
    return cachedAccessToken;
}