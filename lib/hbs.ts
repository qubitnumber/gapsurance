import Handlebars from "handlebars";
import fs from "fs";
import path from "path";

export const renderTemplate = (templatePath: string, data: any): string => {
  const templateContent = fs.readFileSync(path.join(process.cwd(), templatePath), 'utf-8');
  const template = Handlebars.compile(templateContent);
  return template(data);
}

const registerPartials = () => {
  const partialsDir = path.join(process.cwd(), "views", "partials");
  const files = fs.readdirSync(partialsDir);

  files.forEach((file) => {
      const partialName = path.basename(file, ".hbs");
      const partialContent = fs.readFileSync(path.join(partialsDir, file), "utf8");
      Handlebars.registerPartial(partialName, partialContent);
  });
};

const loadLayout = () => {
  const layoutPath = path.join(process.cwd(), "views", "quote.hbs");
  return fs.readFileSync(layoutPath, "utf8");
};

registerPartials();
const quoteTemplate = Handlebars.compile(loadLayout());

export { Handlebars, quoteTemplate };