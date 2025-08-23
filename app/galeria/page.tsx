"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"

const sampleImages = [
  "Janela_da_Alma_mmy9ql",
  "Luxury_ntt59u",
  "Alien_hv9j63",
  "Unchained_brioea",
]

export default function ImageGallery() {

  const info = {
      id: 1,
      title: "Galeria",
      resume: "Aqui você encontrará trabalhos pessoais em diferentes formatos e estilos, explorando variadas abordagens criativas.",
  }

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
      setSelectedImage(selectedImage === 0 ? sampleImages.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === sampleImages.length - 1 ? 0 : selectedImage + 1)
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

  return (
    <div className="w-full">
      <div className="max-w-7x1 mx-auto p-5">
        <section className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6 lg:gap-8">
          <div className="flex-shrink-0 text-left w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl">
            <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-6xl font-black mb-2 md:mb-4 break-words hyphens-auto ">
              {info.title}
            </h2>
          </div>

          <div className="flex-1 w-full md:max-w-4xl mt-4 md:mt-0">
            <p className="text-sm md:text-base leading-relaxed md:text-right text-justify hyphens-auto">{info.resume}</p>
          </div>
        </section>


        {/* Gallery Grid */}
        <div className="space-y-4 ">
          <div className="columns-1 md:columns-2 gap-4 space-y-4">
            {sampleImages.map((src, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 cursor-zoom-in group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <CldImage
                  width="500"
                  height="600"
                  src={src}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto object-cover duration-300"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full-screen Preview Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
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
              {selectedImage + 1} / {sampleImages.length}
            </div>

            {/* Main Image */}
            <div className="relative max-w-full max-h-full p-4">
              <CldImage
                width="1920"
                height="1080"
                src={sampleImages[selectedImage]}
                sizes="100vw"
                alt={`Gallery image ${selectedImage + 1}`}
                className="w-auto h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Mobile Navigation Hints */}
            <div className="absolute bottom-4 left-1/2 text-center -translate-x-1/2 text-white/70 text-sm sm:hidden">
              Deslize para a esquerda ou direita para navegar
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
