import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { useLocation } from "wouter";

const products = [
  {
    id: 1,
    name: "Equipos Agrícolas",
    description: "Herramientas y equipos de alta calidad para trabajos agrícolas",
    image: "/images/tienda-producto-1.jpg",
    price: "Consultar",
  },
  {
    id: 2,
    name: "Alimentos para Animales",
    description: "Alimentos premium para ganado, aves y mascotas",
    image: "/images/tienda-producto-2.jpg",
    price: "Consultar",
  },
  {
    id: 3,
    name: "Herramientas de Trabajo",
    description: "Herramientas profesionales para agricultura y ganadería",
    image: "/images/tienda-producto-3.jpg",
    price: "Consultar",
  },
];

export default function Tienda() {
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
          <h1 className="text-white font-bold text-lg">Tienda</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Nuestra Tienda</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Descubre nuestra amplia variedad de productos agrícolas, alimentos para animales y herramientas profesionales de la más alta calidad.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-foreground/70 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <a
                      href={`https://wa.me/523315723979?text=Hola, me interesa ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Consultar
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            ¿Por qué elegir nuestra tienda?
          </h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              En Hermanos Fonseca Escoto, nos enorgullece ofrecer productos de la más alta calidad para satisfacer todas tus necesidades agrícolas y ganaderas. Con más de 30 años de experiencia en el mercado, hemos establecido relaciones con los mejores proveedores.
            </p>
            <p>
              Nuestro catálogo incluye desde herramientas profesionales hasta alimentos premium para animales, todos seleccionados cuidadosamente para garantizar tu satisfacción.
            </p>
            <p>
              Contamos con un equipo de asesores expertos disponibles para ayudarte a elegir los productos que mejor se adapten a tus necesidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas más información?</h2>
          <p className="mb-6 text-white/90">
            Contacta con nuestro equipo de asesores para conocer todas nuestras opciones
          </p>
          <a
            href="https://wa.me/523315723979"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contactar por WhatsApp
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
