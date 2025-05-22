"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { mainNavLists } from '@/components/contents/content-lists'

export default function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-6">
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {mainNavLists.map((item) => (
              <NavigationMenuItem key={item.title} className="text-base">
                {item.link !== '#' ? (
                  <Link href={item.link} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                  </Link>
                ) : (
                  <>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.subs.map((sub) => (
                        <li key={sub.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={sub.link}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{sub.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{sub.excerpt}</p>
                            </Link>
                          </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:flex">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </div>
  )
}
