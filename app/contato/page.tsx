"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const info = {
    title: "Contato",
    resume:
      "Entre em contato conosco para discutir seu próximo projeto. Estamos prontos para transformar suas ideias em realidade visual.",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
              <section className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6 lg:gap-8">
          <div className="flex-shrink-0 text-left w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-6xl font-black mb-2 md:mb-4 break-words hyphens-auto">
              {info.title}
            </h1>
          </div>

          <div className="flex-1 w-full md:max-w-4xl mt-4 md:mt-0">
            <p className="text-sm md:text-base leading-relaxed md:text-right text-justify hyphens-auto">
              {info.resume}
            </p>
          </div>
        </section>
      <div className="max-w-7xl mx-auto p-5">


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da sua mensagem"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" className="w-full md:w-auto px-8 py-3">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-orange-display/20 rounded-lg">
              <h3 className="font-semibold mb-3 text-black-sans/80">Horário de Atendimento</h3>
              <div className="space-y-1 text-sm text-black-sans/60">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
