import Image from "next/image"

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";


export default function Footer() {

   const socials = [
            {
                link: "https://www.instagram.com/darkspire.studio/",
                label: "Instagram",
                icon: FaInstagram,
            },
    
            {
                link: "https://www.instagram.com/darkspire.studio/",
                label: "Behance",
                icon: FaBehance,
            },
    
           // {
           //     link: "https://www.instagram.com/mnfll.dsgn/",
           //     label: "LinkedIn",
           //     icon: FaLinkedin,
           // },
    ]
  return (
    <footer className="bg-orange-display border-t-2 border-black-sans">
      <div className="px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row md:justify-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-sm ">
          {/* Navegação Column */}
          <div className="space-y-1">
            <p className="font-bold text-foreground">Navegação</p>
            <Link href="/" className="block hover:text-purple-script transition-colors">
              Início
            </Link>
            <Link href="/projetos" className="block hover:text-purple-script transition-colors">
              Projetos
            </Link>
            <Link href="/galeria" className="block hover:text-purple-script transition-colors">
              Galeria
            </Link>
            <Link href="/sobre" className="block hover:text-purple-script transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="block hover:text-purple-script transition-colors">
              Contato
            </Link>
          </div>

          {/* Social Media Column */}
          <div className="space-y-1">
            <p className="font-bold text-foreground">Redes</p>
            {socials.map((social, index)=>{
                
                const Icons = social.icon
                
                return <Link href={social.link} key={index} aria-label={social.label} target="_blank" >

                    <div className="flex gap-2 py-0.5 md:py-0 hover:text-purple-script transition-colors">
                      <Icons className="w-5 h-5 "/>
                      <p>{social.label}</p>
                    </div>

                    
                </Link>

            })}
          </div>

          {/* Copyright and Legal Column */}
          <div className="space-y-1 relative">
            <p className="font-black text-foreground">© 2025 Typeface Bureau</p>

          </div>
        </div>
      </div>

      {/* Full-width image at the bottom */}
      <div className="w-full pb-1 xl:pb-3">
        <Image
          src="/Emotes.svg"
          alt="Emotes"
          width={600}
          height={100}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </footer>
  )
}
