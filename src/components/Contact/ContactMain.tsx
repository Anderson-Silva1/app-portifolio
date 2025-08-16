"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactMain() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anderson.developer360@gmail.com",
      href: "mailto:anderson.developer360@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (85) 9 2160-6725",
      href: "tel:+5585921606725",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Fortaleza, CE",
      href: null,
    },
  ];

  return (
    <div className="text-foreground py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Entre em Contato
          </h1>
          <p className="mx-auto max-w-2xl text-xl">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Informações de Contato */}
          <div>
            <h2 className="mb-8 text-2xl font-bold">Informações de Contato</h2>
            <div className="mb-8 space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-chart-1 flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm">{info.label}</p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    className="hover:bg-chart-4 block rounded-lg p-4 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label} className="p-4">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="card">
              <h3 className="mb-4 text-xl font-bold">Disponibilidade</h3>
              <p className="mb-4">
                Estou disponível para projetos freelance e oportunidades de
                trabalho.
              </p>
              <p className="">
                Tempo de resposta:{" "}
                <span className="text-chart-1 font-bold">24 horas</span>
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="card">
            <h2 className="mb-6 text-2xl font-bold">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-border bg-background2 w-full rounded-lg border px-4 py-3 transition-colors outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-border bg-background2 w-full rounded-lg border px-4 py-3 transition-colors outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-border bg-background2 w-full resize-none rounded-lg border px-4 py-3 transition-colors outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary hover:text-chart-1 flex w-full cursor-pointer items-center justify-center gap-4 text-lg transition hover:font-bold"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
