'use client'

import Link from 'next/link'
import Image from "next/image"
import { Menu } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import MainNav from "@/components/main-nav"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from './ui/button'


export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b bg-background/20 py-4 backdrop-blur-sm'>
      <nav className='container flex max-w-none items-center justify-between'>
        <Sheet>
          <SheetTrigger className='sm:hidden'>
            <Menu className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent side='left' className="w-[100px] sm:w-[100px]">
            <SheetTitle className="hidden">
              Gap Insurance
            </SheetTitle>
            <ul className='flex flex-col gap-3 text-sm'>
              <li className='font-serif text-lg font-semibold mb-5'>
                <SheetClose asChild>
                  <Link href='/'> Gap Insurance</Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        <ul className='hidden items-center gap-10 text-sm font-medium sm:flex'>
          <li className='font-serif text-lg font-semibold mr-10'>
            <Link href="/" className="flex items-center">
              <div className="relative h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
                <Image src="/deductibles.png" alt="Pocketsurance" fill className="object-contain" priority />
              </div>
              <span className="text-xs md:text-sm lg:text-lg font-bold text-gray-800 ml-3">
                GAPSURANCE
              </span>
            </Link> 
          </li>
          <MainNav />
        </ul>

        <div className='flex items-center justify-between gap-6'>
          <Button
            variant="outline"
            className="rounded-md border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600"
            asChild
          >
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
