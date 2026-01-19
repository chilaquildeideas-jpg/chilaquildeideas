import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Code2, Database, Shield } from "lucide-react";
import { useLocation } from "wouter";

const services = [
  {
    id: 1,
    title: "Soluciones de Software",
    description: "Desarrollo de aplicaciones personalizadas para optimizar tu negocio",
    image: "/images/tecnologia-2.jpg",
    features: ["Aplicaciones web", "Sistemas de gestión", "Integración de APIs"],
  },
  {
    id: 2,
    title: "Infraestructura y Servidores",
    description: "Soluciones de hosting y servidores confiables y seguros",
    image: "/images/tecnologia-1.jpg",
    features: ["Servidores dedicados", "Cloud computing", "Respaldo automático"],
  },
  {
    id: 3,
    title: "Seguridad Digital",
    description: "Protección avanzada para tu información y datos críticos",
    image: "/images/tecnologia-1.jpg",
    features: ["Encriptación", "Firewall", "Monitoreo 24/7"],
  },
];

const features = [
  {
    icon: Code2,
    title: "Desarrollo Personalizado",
    description: "Soluciones adaptadas a las necesidades específicas de tu empresa",
  },
  {
    icon: Database,
    title: "Gestión de Datos",
    description: "Sistemas eficientes para administrar y analizar tu información",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Protección de máximo nivel para tus datos y operaciones",
  },
];

export default function Tecnologia() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-blue sticky top-0 z-50 shadow-lg">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-2 rounded transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="text-sm font-medium">Volver</span>
          </button>
          <h1 className="text-white font-bold text-lg">Tecnología</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Soluciones Tecnológicas</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Transformamos tu negocio con tecnología de vanguardia, soluciones innovadoras y soporte profesional.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground/60 flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/523315723979?text=Hola, me interesa conocer más sobre tus soluciones tecnológicas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Solicitar Consulta
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Transformación Digital
          </h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              En un mundo cada vez más digital, las empresas necesitan soluciones tecnológicas que no solo funcionen, sino que impulsen el crecimiento y la eficiencia.
            </p>
            <p>
              Nuestro equipo de expertos en tecnología trabaja contigo para entender tus desafíos específicos y desarrollar soluciones personalizadas que se adapten a tu modelo de negocio.
            </p>
            <p>
              Desde infraestructura en la nube hasta aplicaciones personalizadas, ofrecemos un espectro completo de servicios tecnológicos respaldados por años de experiencia y expertise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="mb-6 text-white/90">
            Contacta con nuestro equipo de especialistas en tecnología
          </p>
          <a
            href="https://wa.me/523315723979"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Iniciar Consulta
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container text-center text-sm text-white/70">
          <p>© 2024 Hermanos Fonseca Escoto. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
