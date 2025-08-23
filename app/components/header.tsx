import Link from "next/link"
import MobileNav from "./mobile-nav"
import MainNav from "./main-nav"

import { FaInstagram, FaBehance } from "react-icons/fa"

export default function Header() {
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

    // {
    //     link: "https://www.instagram.com/mnfll.dsgn/",
    //     label: "LinkedIn",
    //     icon: FaLinkedin,
    // },
  ]

  return (
    <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      {/* Desktop */}
      <div className="p-3 flex items-center">
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & mobile */}
        <div className="flex items-center justify-end flex-1">
          <div className="flex items-center gap-5 ">
            {socials.map((social, index) => {
              const Icons = social.icon

              return (
                <Link href={social.link} key={index} aria-label={social.label} target="_blank">
                  <Icons className="w-5 h-5 hover:scale-125 transition-all hover:fill-orange-display" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
