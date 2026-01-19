/*
  Design Philosophy: Corporativo Profesional Azul
  - Hermanos Fonseca Escoto
  - Navegación clara y estructura empresarial
  - Paleta azul intenso con acentos blancos
  - Tipografía profesional y legible
*/

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "¿Quiénes somos?", href: "#quienes-somos" },
    { label: "Lo Nuevo", href: "/lo-nuevo" },
    { label: "Tienda", href: "/tienda" },
    { label: "Tecnología", href: "/tecnologia" },
    { label: "NetPlaza", href: "/netplaza" },
    { label: "Asesores", href: "/asesores" },
    { label: "NetIon", href: "#netion" },
    { label: "Insumodganadero", href: "#insumodganadero" },
    { label: "Imextran", href: "#imextran" },
    { label: "Contactanos", href: "#contactanos" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Azul Corporativo */}
      <header className="header-blue sticky top-0 z-50 shadow-lg">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo-hermanos-fonseca-hd.png"
              alt="Hermanos Fonseca Escoto"
              className="w-14 h-14 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-base leading-tight">
                Hermanos Fonseca
              </span>
              <span className="text-white/80 font-semibold text-xs">
                Escoto
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm text-white hover:bg-white/10 rounded transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-blue-700 border-t border-white/10">
            <div className="container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-white hover:bg-white/10 rounded transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Banner Principal */}
      <section
        id="inicio"
        className="banner-overlay relative min-h-96 md:min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url(/images/section-nature.png)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-blue-600/40" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hermanos Fonseca
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-white">
              ¡somos diferente!
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section id="quienes-somos" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Hermanos Fonseca Escoto es una empresa con más de 30 años de experiencia en el mercado mexicano, dedicada a ofrecer soluciones innovadoras y de calidad en diversos sectores.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Nuestro compromiso es proporcionar productos y servicios que cumplan con los más altos estándares de calidad, siempre pensando en el bienestar de nuestros clientes y el desarrollo sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Secciones de Servicios */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lo Nuevo",
                description:
                  "Descubre las últimas innovaciones y productos en nuestro catálogo actualizado.",
              },
              {
                title: "Tienda",
                description:
                  "Accede a nuestra tienda online con una amplia variedad de productos disponibles.",
              },
              {
                title: "Tecnología",
                description:
                  "Soluciones tecnológicas avanzadas para optimizar tu negocio.",
              },
              {
                title: "NetPlaza",
                description:
                  "Plataforma digital para facilitar tus transacciones comerciales.",
              },
              {
                title: "Asesores",
                description:
                  "Nuestro equipo de expertos está disponible para asesorarte.",
              },
              {
                title: "Contacto",
                description:
                  "Ponte en contacto con nosotros para resolver tus dudas.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-border"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contactanos" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Contáctanos
            </h2>
            <p className="text-center text-foreground/70 mb-12">
              Completa el formulario y nos pondremos en contacto pronto.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Información de contacto */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-primary mb-3 text-lg">
                    Ubicación
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Allende 167 C.P. 47755
                    <br />
                    San Francisco de Asís, Jalisco, México
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3 text-lg">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/523315723979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    (33) 15 72 3979
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3 text-lg">
                    Empresa
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Hermanos Fonseca Escoto S.A. de C.V.
                  </p>
                </div>
              </div>

              {/* Formulario */}
              <div className="md:col-span-2 bg-primary/5 p-8 rounded-lg border border-primary/20">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="text-center space-y-2 text-sm">
            <p>Hermanos Fonseca Escoto S.A. de C.V.</p>
            <p>Allende 167 C.P. 47755</p>
            <p>San Francisco de Asís, Jalisco, México</p>
            <p className="pt-4">
              WhatsApp: (33) 15 72 3979
            </p>
            <p className="pt-4 text-white/70">todos los derechos reservados 2016</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
