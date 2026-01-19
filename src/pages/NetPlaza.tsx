import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Globe, ShoppingBag, Zap } from "lucide-react";
import { useLocation } from "wouter";

const features = [
  {
    icon: ShoppingBag,
    title: "Tienda Online Integrada",
    description: "Plataforma de comercio electrónico completa y fácil de usar",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Vende tus productos a clientes en todo el mundo sin límites",
  },
  {
    icon: Zap,
    title: "Transacciones Rápidas",
    description: "Procesamiento de pagos seguro y eficiente en tiempo real",
  },
];

const benefits = [
  {
    title: "Gestión Simplificada",
    description: "Panel de control intuitivo para administrar tu tienda online",
  },
  {
    title: "Seguridad Garantizada",
    description: "Encriptación de datos y protección contra fraudes",
  },
  {
    title: "Soporte 24/7",
    description: "Equipo de soporte disponible para ayudarte en cualquier momento",
  },
  {
    title: "Análisis Detallados",
    description: "Reportes y estadísticas para optimizar tu negocio",
  },
  {
    title: "Múltiples Métodos de Pago",
    description: "Acepta tarjetas, transferencias, billeteras digitales y más",
  },
  {
    title: "Integración con Redes Sociales",
    description: "Conecta tu tienda con tus redes sociales fácilmente",
  },
];

export default function NetPlaza() {
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
          <h1 className="text-white font-bold text-lg">NetPlaza</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">NetPlaza</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Tu plataforma digital completa para vender en línea. Gestiona tu tienda, procesa pagos y crece tu negocio sin complicaciones.
          </p>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Características Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-8 text-center border-border hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Beneficios de NetPlaza
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            ¿Cómo funciona NetPlaza?
          </h2>
          <div className="space-y-6 text-foreground/80">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">1. Registro Simple</h3>
              <p>
                Crea tu cuenta en minutos y accede a tu panel de control personalizado. No requiere conocimientos técnicos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">2. Configura tu Tienda</h3>
              <p>
                Personaliza tu tienda con tu logo, colores y descripción de productos. Carga imágenes y establece precios fácilmente.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">3. Gestiona Inventario</h3>
              <p>
                Controla tu inventario en tiempo real, recibe notificaciones de nuevas órdenes y gestiona el envío desde un solo lugar.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">4. Crece tu Negocio</h3>
              <p>
                Accede a herramientas de marketing, análisis detallados y reportes para optimizar tu negocio y aumentar tus ventas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Planes Disponibles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Básico",
                price: "Consultar",
                features: ["Hasta 100 productos", "Soporte por email", "Análisis básicos"],
              },
              {
                name: "Profesional",
                price: "Consultar",
                features: ["Productos ilimitados", "Soporte prioritario", "Análisis avanzados", "Integración con redes sociales"],
                highlighted: true,
              },
              {
                name: "Empresarial",
                price: "Consultar",
                features: ["Todo incluido", "Soporte 24/7", "API personalizada", "Asesoría dedicada"],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 border-border ${
                  plan.highlighted ? "border-primary border-2 shadow-lg" : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-foreground/70">
                      <span className="text-primary font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/523315723979?text=Hola, me interesa el plan NetPlaza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Solicitar Información
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para vender en línea?</h2>
          <p className="mb-6 text-white/90">
            Inicia tu tienda online con NetPlaza hoy mismo
          </p>
          <a
            href="https://wa.me/523315723979"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Comenzar Ahora
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
