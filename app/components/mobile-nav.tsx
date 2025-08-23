"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HiMiniBars3 } from "react-icons/hi2";
import Link from 'next/link';
import Image from "next/image";

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"


export default function MobileNav() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  return (
    <div className='md:hidden'>
      <Sheet>
        <div className='flex gap-3'>
            <SheetTrigger>
                <HiMiniBars3 className="w-5 h-5 hover:scale-125 transition-all hover:fill-orange-display"/>
            </SheetTrigger>

            <Link href='/'>
                <Image src={"/Logo.svg"} alt={"Logo"} width={250} height={200} className="h-20 w-52" priority={true}/>
            </Link>
        </div>
        
        
        <SheetContent side='left' className='p-5'>
            <SheetTitle>
                <Link href='/'>
                    <Image src={"/LogoW.svg"} alt={"Logo"} width={250} height={200} className="h-20 w-52" priority={true}/>
                </Link>
            </SheetTitle>

            <SheetDescription className="sr-only">
                description goes here
            </SheetDescription>
            
            <nav className='flex flex-col gap-3 lg:gap-4 mt-6 text-3xl'>
                <Link href='/' className='hover:text-purple-script transition-colors'>Inicio</Link>
                <div>
                  <button
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className="flex items-center justify-between w-full text-left hover:text-purple-script transition-colors cursor-pointer"
                  >
                    Projetos
                    {isProjectsOpen ? <ChevronDown className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
                  </button>
                  {isProjectsOpen && (
                    <div className="ml-4 mt-2 space-y-2 text-2xl">
                      <Link href="/projetos" className="block hover:text-purple-script transition-colors">
                        Todos os Projetos
                      </Link>
                      <Link href="/projetos/projeto-a" className="block hover:text-purple-script transition-colors">
                        Projeto A
                      </Link>
                      <Link href="/projetos/projeto-b" className="block hover:text-purple-script transition-colors">
                        Projeto B
                      </Link>
                      <Link href="/projetos/projeto-c" className="block hover:text-purple-script transition-colors">
                        Projeto C
                      </Link>
                    </div>
                  )}
                </div>
                <Link href='/galeria' className='hover:text-purple-script transition-colors'>Galeria</Link>
                <Link href='/sobre' className='hover:text-purple-script transition-colors'>Sobre</Link>
                <Link href='/contato' className='hover:text-purple-script transition-colors'>Contato</Link>
            </nav>

            <SheetFooter className='font-bold text-beige-serif text-4xl -p-5 text-pretty'>
                Forma.<br />
                Função.<br />
                Identidade.
            </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
