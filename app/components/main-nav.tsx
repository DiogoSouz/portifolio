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

const projectLinks = [
  { name: "Todos os Projetos", href: "/projetos" },
  { name: "Raw // Pure", href: "/projetos/raw-pure" },
  { name: "Festival", href: "/projetos/projeto-b" },
  { name: "Lanchonete", href: "/projetos/projeto-c" },
  { name: "Projeto D", href: "/projetos/projeto-d" },
  { name: "Projeto E", href: "/projetos/projeto-e" },
  { name: "Projeto F", href: "/projetos/projeto-f" },
]


export default function MainNav() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  return (
    <div className='hidden md:flex'>
      <Sheet>
        <div className='flex gap-3'>
            <SheetTrigger>
                <HiMiniBars3 className="w-5 h-5 hover:scale-125 transition-all hover:fill-orange-display"/>
            </SheetTrigger>

            <Link href='/'>
                <Image src={"/Logo.svg"} alt={"Logo"} width={250} height={200} className="h-20 w-52" priority={true}/>
            </Link>
        </div>
        
        
        <SheetContent side='left' className='p-5 '>

            <SheetTitle>
                <Link href='/'>
                    <Image src={"/LogoW.svg"} alt={"Logo"} width={250} height={200} className="h-20 w-52" priority={true}/>
                </Link>
            </SheetTitle>

            <SheetDescription className="sr-only">
                description goes here
            </SheetDescription>
            
            <nav className='flex flex-col gap-3 lg:gap-4 mt-6 text-3xl'>
                <Link href='/' className='hover:text-purple-script font-semibold transition-colors'>Inicio</Link>
                <div>
                  <button
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className="flex items-center justify-between w-full text-left hover:text-purple-script font-semibold transition-colors cursor-pointer"
                  >
                    Projetos
                    {isProjectsOpen ? <ChevronDown className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
                  </button>
                  {isProjectsOpen && (
                    <div className="ml-4 mt-2 space-y-2 text-2xl">
                      {projectLinks.map((project, index) => (
                        <Link key={index} href={project.href} className="block hover:text-purple-script transition-colors">
                          {project.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href='/galeria' className='hover:text-purple-script font-semibold transition-colors'>Galeria</Link>
                <Link href='/sobre' className='hover:text-purple-script font-semibold transition-colors'>Quem Somos</Link>
                <Link href='/contato' className='hover:text-purple-script font-semibold transition-colors'>Entre em Contato</Link>
            </nav>

            <SheetFooter className='font-bold text-beige-serif text-5xl -p-5 text-pr'>
                Forma.<br />
                Função.<br />
                Identidade.
            </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
