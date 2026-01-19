import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Calendar, Tag, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  contenido: string;
  imagen: string;
  categoria: "producto" | "oferta" | "actualizacion";
  fecha: string;
  destacada?: boolean;
}

const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Nuevo Lanzamiento: Equipos Agrícolas de Última Generación",
    descripcion: "Presentamos nuestra línea de equipos agrícolas más avanzados con tecnología de punta.",
    contenido: "Nos complace anunciar el lanzamiento de nuestra nueva línea de equipos agrícolas diseñados con la tecnología más avanzada del mercado. Estos equipos están optimizados para mejorar la productividad y reducir costos operativos.",
    imagen: "/images/noticia-nuevo-producto.jpg",
    categoria: "producto",
    fecha: "2024-01-18",
    destacada: true,
  },
  {
    id: 2,
    titulo: "Oferta Especial: 20% de Descuento en Toda la Tienda",
    descripcion: "Aprovecha nuestra promoción limitada con descuentos en todos nuestros productos.",
    contenido: "Durante este mes, ofrecemos un descuento especial del 20% en toda nuestra línea de productos agrícolas. Esta es una oportunidad única para equipar tu negocio con herramientas de calidad a precios reducidos.",
    imagen: "/images/oferta-especial.jpg",
    categoria: "oferta",
    fecha: "2024-01-16",
    destacada: true,
  },
  {
    id: 3,
    titulo: "Actualización de Sistema: Mejoras en NetPlaza",
    descripcion: "Hemos mejorado la plataforma NetPlaza con nuevas características y mejor rendimiento.",
    contenido: "Nos complace informar que hemos completado una actualización importante de nuestra plataforma NetPlaza. Las mejoras incluyen interfaz más intuitiva, procesamiento más rápido de pagos y nuevas herramientas de análisis.",
    imagen: "/images/actualizacion-sistema.jpg",
    categoria: "actualizacion",
    fecha: "2024-01-15",
  },
  {
    id: 4,
    titulo: "Nuevo Servicio: Asesoría Personalizada Gratuita",
    descripcion: "Ahora ofrecemos consultas gratuitas para ayudarte a elegir los mejores productos.",
    contenido: "Nuestro equipo de expertos está disponible para brindarte asesoría personalizada sin costo alguno. Contacta con nosotros para conocer qué soluciones se adaptan mejor a tus necesidades.",
    imagen: "/images/tienda-producto-1.jpg",
    categoria: "producto",
    fecha: "2024-01-14",
  },
  {
    id: 5,
    titulo: "Expansión: Nuevas Sucursales en Jalisco",
    descripcion: "Estamos expandiendo nuestra presencia con nuevas ubicaciones en la región.",
    contenido: "Hermanos Fonseca Escoto continúa creciendo. Este año abriremos tres nuevas sucursales en diferentes municipios de Jalisco para mejor servicio a nuestros clientes.",
    imagen: "/images/tecnologia-1.jpg",
    categoria: "actualizacion",
    fecha: "2024-01-12",
  },
  {
    id: 6,
    titulo: "Promoción: Compra 2 Productos y Obtén 1 Gratis",
    descripcion: "Aprovecha esta promoción en productos seleccionados de nuestra tienda.",
    contenido: "Durante enero, en productos seleccionados de la categoría de alimentos para animales, al comprar 2 productos recibirás 1 adicional completamente gratis.",
    imagen: "/images/tienda-producto-2.jpg",
    categoria: "oferta",
    fecha: "2024-01-10",
  },
];

const categorias = [
  { id: "todos", label: "Todos", color: "bg-blue-600" },
  { id: "producto", label: "Productos", color: "bg-green-600" },
  { id: "oferta", label: "Ofertas", color: "bg-red-600" },
  { id: "actualizacion", label: "Actualizaciones", color: "bg-purple-600" },
];

export default function LoNuevo() {
  const [, navigate] = useLocation();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<Noticia | null>(null);

  const noticiasFiltradas =
    categoriaSeleccionada === "todos"
      ? noticias
      : noticias.filter((n) => n.categoria === categoriaSeleccionada);

  const noticiaDestacada = noticias.find((n) => n.destacada);

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
          <h1 className="text-white font-bold text-lg">Lo Nuevo</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Lo Nuevo en Hermanos Fonseca</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Mantente informado sobre nuestros últimos productos, ofertas especiales y actualizaciones del sistema.
          </p>
        </div>
      </section>

      {/* Noticia Destacada */}
      {noticiaDestacada && (
        <section className="py-8 bg-secondary/30">
          <div className="container">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-l-4 border-primary">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={noticiaDestacada.imagen}
                    alt={noticiaDestacada.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">DESTACADO</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {noticiaDestacada.titulo}
                  </h2>
                  <p className="text-foreground/70 mb-6">{noticiaDestacada.contenido}</p>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(noticiaDestacada.fecha).toLocaleDateString("es-MX")}
                    </div>
                  </div>
                  <a
                    href="https://wa.me/523315723979?text=Hola, me interesa conocer más sobre esta noticia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-primary hover:bg-primary/90">
                      Más Información
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filtros de Categoría */}
      <section className="py-8">
        <div className="container">
          <h3 className="text-lg font-semibold text-primary mb-4">Filtrar por categoría:</h3>
          <div className="flex flex-wrap gap-3">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaSeleccionada(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  categoriaSeleccionada === cat.id
                    ? `${cat.color} text-white shadow-lg`
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticiasFiltradas.map((noticia) => (
              <Card
                key={noticia.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border cursor-pointer"
                onClick={() => setNoticiaSeleccionada(noticia)}
              >
                <div className="aspect-video overflow-hidden bg-gray-100 relative">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold ${
                      noticia.categoria === "producto"
                        ? "bg-green-600"
                        : noticia.categoria === "oferta"
                          ? "bg-red-600"
                          : "bg-purple-600"
                    }`}
                  >
                    {noticia.categoria === "producto"
                      ? "Producto"
                      : noticia.categoria === "oferta"
                        ? "Oferta"
                        : "Actualización"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                    {noticia.descripcion}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Calendar size={14} />
                    {new Date(noticia.fecha).toLocaleDateString("es-MX")}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {noticiasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/70 text-lg">
                No hay noticias en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Suscripción */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Suscríbete a Nuestro Boletín
            </h2>
            <p className="text-foreground/70 mb-6">
              Recibe las últimas noticias, ofertas especiales y actualizaciones directamente en tu WhatsApp.
            </p>
            <a
              href="https://wa.me/523315723979?text=Hola, quiero suscribirme al boletín de noticias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white w-full">
                Suscribirse por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Modal de Noticia Detallada */}
      {noticiaSeleccionada && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setNoticiaSeleccionada(null)}
        >
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-primary flex-1">
                  {noticiaSeleccionada.titulo}
                </h2>
                <button
                  onClick={() => setNoticiaSeleccionada(null)}
                  className="text-foreground/60 hover:text-foreground text-2xl"
                >
                  ×
                </button>
              </div>

              <img
                src={noticiaSeleccionada.imagen}
                alt={noticiaSeleccionada.titulo}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              <div className="flex items-center gap-4 mb-6 text-sm text-foreground/60">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {new Date(noticiaSeleccionada.fecha).toLocaleDateString("es-MX")}
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={16} />
                  {noticiaSeleccionada.categoria === "producto"
                    ? "Producto"
                    : noticiaSeleccionada.categoria === "oferta"
                      ? "Oferta"
                      : "Actualización"}
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                {noticiaSeleccionada.contenido}
              </p>

              <a
                href="https://wa.me/523315723979"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Contactar por WhatsApp
                </Button>
              </a>
            </div>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container text-center text-sm text-white/70">
          <p>© 2024 Hermanos Fonseca Escoto. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
