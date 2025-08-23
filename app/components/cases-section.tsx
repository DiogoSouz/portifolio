"use client"

import Link from "next/link"
import { getFeaturedProjects } from "@/lib/projects-data"
import { CldImage } from "next-cloudinary"

export default function BestCasesSection() {
  const projects = getFeaturedProjects()

  return (
    <section className="py-16">
      <div className=" mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Projetos</h2>
          <div className="flex-1 mx-8 h-px bg-border border-black-sans"></div>
          <Link href="/projetos" className="text-sm hover:text-orange-display transition-colors">
            Ver Mais &gt;
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[100vh]">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden cursor-pointer">
            <Link href={`/projetos/${project.slug}`} className="text-sm hover:text-orange-display transition-colors">
              <CldImage
                width={1920}
                height={1080}
                src={project.images[0] || "placeholder_yaiki2"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 hover:backdrop-blur-sm  transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-md italic mb-2">{project.year}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.categories.map((category, index) => (
                      <span key={index} className="text-sm font-medium bg-orange-display px-3 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
