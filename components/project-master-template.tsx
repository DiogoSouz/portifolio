"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import type { ProjectData } from "@/lib/projects-data"

interface ProjectMasterTemplateProps {
  project: ProjectData
}

export default function ProjectMasterTemplate({ project }: ProjectMasterTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (e.key) {
        case "Escape":
          setSelectedImage(null)
          break
        case "ArrowLeft":
          navigateImage("prev")
          break
        case "ArrowRight":
          navigateImage("next")
          break
      }
    }

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? project.images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === project.images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      navigateImage("next")
    } else if (isRightSwipe) {
      navigateImage("prev")
    }
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null)
    }
  }

  const renderImage = (src: string, index: number) => {
    const isCloudinaryId = !src.startsWith("http")

    if (isCloudinaryId) {
      return (
        <CldImage
          width="960"
          height="600"
          src={src || "placeholder_yaiki2"}
          sizes="100vw"
          alt={`${project.title} - Image ${index + 1}`}
          className="h-auto w-full object-cover duration-300"
        />
      )
    } else {
      return (
        <img
          src={src || "placeholder_yaiki2"}
          alt={`${project.title} - Image ${index + 1}`}
          className="h-auto w-full object-cover duration-300"
        />
      )
    }
  }

  const renderModalImage = (src: string, index: number) => {
    const isCloudinaryId = !src.startsWith("http")

    if (isCloudinaryId) {
      return (
        <CldImage
          width="1920"
          height="1080"
          src={src || "placeholder_yaiki2"}
          sizes="100vw"
          alt={`${project.title} - Image ${index + 1}`}
          className="w-auto h-auto object-contain"
          onClick={(e) => e.stopPropagation()}
          priority
        />
      )
    } else {
      return (
        <img
          src={src || "/placeholder.svg"}
          alt={`${project.title} - Image ${index + 1}`}
          className="w-auto h-auto object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      )
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7x1 mx-auto p-5">
        <section className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6 lg:gap-8">
          <div className="flex-shrink-0 text-left w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl">
            <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-6xl font-black mb-2 md:mb-4 break-words hyphens-auto">
              {project.title}
            </h2>
            <div className="space-y-1">
              <p className="text-sm font-medium">Tipo de Projeto</p>
              <p className="text-sm font-bold">{project.client}</p>
              <p className="text-sm font-regular">{project.year}</p>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-xs italic">{project.categories.join(" • ")}</p>
            </div>
          </div>

          <div className="flex-1 w-full md:max-w-4xl mt-4 md:mt-0">
            <p className="text-sm md:text-base leading-relaxed md:text-right text-justify hyphens-auto">
              {project.resume}
            </p>
          </div>
        </section>

        <div className="space-y-4">
          {project.images.map((src, index) => (
            <div
              key={index}
              className="w-full cursor-zoom-in group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              {renderImage(src, index)}
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black-sans/90 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={handleOverlayClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Exit Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 z-10 text-white hover:bg-white/20 h-10 w-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 h-12 w-12 hidden sm:flex"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 h-12 w-12 hidden sm:flex"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {project.images.length}
            </div>

            {/* Main Image */}
            <div className="relative max-w-full max-h-full p-4">
              {renderModalImage(project.images[selectedImage], selectedImage)}
            </div>

            {/* Mobile Navigation Hints */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm sm:hidden">
              Swipe left or right to navigate
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
