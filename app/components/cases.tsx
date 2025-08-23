"use client"

import Link from "next/link"
import { useState } from "react"
import { getAllProjectsSortedByYear, getAllCategories } from "@/lib/projects-data"
import { CldImage } from "next-cloudinary"

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const categories = ["Todos", ...getAllCategories()]

  const allProjects = getAllProjectsSortedByYear()

  const filteredProjects =
    activeCategory === "Todos"
      ? allProjects
      : allProjects.filter((project) => project.categories.includes(activeCategory))

  return (
    <section>
      <div className="mx-auto">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-orange-display text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden cursor-pointer">
            <Link href={`/projetos/${project.slug}`} className="text-sm hover:text-orange-display transition-colors">
              <CldImage
                width={1920}
                height={1080}
                src={project.images[0] || "placeholder_yaiki2"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-md italic mb-2">{project.year}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.categories.map((category, index) => (
                      <span key={index} className="text-xs font-medium bg-orange-display px-2 py-1 rounded-full">
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
