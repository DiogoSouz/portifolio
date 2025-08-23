"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import Image from "next/image";


export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            link: "https://www.instagram.com/darkspire.studio/",
            label: "Instagram",
            icon: FaInstagram,
        },

        {
            link: "https://www.instagram.com/darkspire.studio/",
            label: "Instagram",
            icon: FaBehance,
        },

        {
            link: "https://www.instagram.com/mnfll.dsgn/",
            label: "LinkedIn",
            icon: FaLinkedin,
        },
    ]

 return (
   <nav className={cn(" pt-8  animate-move-down", className)}>

    <div className="flex justify-between items-center px-5" >
        <Link href="/" className="text-2xl font-bold underline underline-offset-8 decoration-purple-700">
            <Image src={"Logo.svg"} alt={"Logo"} width={250} height={200} className="h-20 w-52"/>        
        </Link>



    
        <div className="flex items-center gap-5 ">
            {socials.map((social, index)=>{
                
                const Icons = social.icon
                
                return <Link href={social.link} key={index} aria-label={social.label} target="_blank" >
            
                    <Icons className="w-5 h-5 hover:scale-125 transition-all hover:fill-orange-display"/>
                    
                </Link>

            })}

        </div>

       

    </div>

    <hr className="drop-shadow-xs" />
    
   </nav>
   
    
    );
}
