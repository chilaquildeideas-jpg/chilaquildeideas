import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Mail, Phone, Briefcase, Award } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

interface Asesor {
  id: number;
  nombre: string;
  especialidad: string;
  experiencia: string;
  años: number;
  descripcion: string;
  imagen: string;
  habilidades: string[];
  telefono: string;
}

const asesores: Asesor[] = [
  {
    id: 1,
    nombre: "Carlos Hernández",
    especialidad: "Asesor Agrícola",
    experiencia: "Especialista en productos agrícolas y soluciones de cultivo",
    años: 20,
    descripcion:
      "Carlos cuenta con más de 20 años de experiencia en el sector agrícola. Es experto en la selección de productos, optimización de cosechas y asesoría personalizada para agricultores de todas las escalas.",
    imagen: "/images/asesor-carlos-hernandez.jpg",
    habilidades: ["Productos Agrícolas", "Optimización de Cosechas", "Consultoría", "Sostenibilidad"],
    telefono: "523315723979",
  },
  {
    id: 2,
    nombre: "María García",
    especialidad: "Especialista en Tecnología",
    experiencia: "Experta en soluciones digitales y plataformas de comercio electrónico",
    años: 15,
    descripcion:
      "María es una profesional con 15 años de experiencia en tecnología y transformación digital. Especializada en implementación de NetPlaza y soluciones tecnológicas para negocios agrícolas.",
    imagen: "/images/asesor-maria-garcia.jpg",
    habilidades: ["NetPlaza", "E-commerce", "Transformación Digital", "Capacitación"],
    telefono: "523315723979",
  },
  {
    id: 3,
    nombre: "Juan López",
    especialidad: "Gerente de Ventas",
    experiencia: "Especialista en relaciones comerciales y desarrollo de negocios",
    años: 18,
    descripcion:
      "Juan tiene 18 años de experiencia en ventas y relaciones comerciales. Es el encargado de desarrollar estrategias de negocio personalizadas y mantener relaciones duraderas con clientes.",
    imagen: "/images/asesor-juan-lopez.jpg",
    habilidades: ["Ventas", "Relaciones Comerciales", "Estrategia de Negocio", "Negociación"],
    telefono: "523315723979",
  },
  {
    id: 4,
    nombre: "Rosa Martínez",
    especialidad: "Especialista en Atención al Cliente",
    experiencia: "Experta en servicio al cliente y resolución de consultas",
    años: 12,
    descripcion:
      "Rosa es una profesional dedicada con 12 años de experiencia en atención al cliente. Se especializa en resolver consultas, brindar asesoría personalizada y garantizar la satisfacción del cliente.",
    imagen: "/images/asesor-rosa-martinez.jpg",
    habilidades: ["Atención al Cliente", "Resolución de Problemas", "Asesoría", "Seguimiento"],
    telefono: "523315723979",
  },
];

export default function Asesores() {
  const [, navigate] = useLocation();
  const [asesorSeleccionado, setAsesorSeleccionado] = useState<Asesor | null>(null);
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensaje = `Hola, me gustaría una consulta con el equipo de Hermanos Fonseca. Nombre: ${formData.nombre}, Email: ${formData.email}, Teléfono: ${formData.telefono}, Asunto: ${formData.asunto}, Mensaje: ${formData.mensaje}`;
    const enlaceWhatsApp = `https://wa.me/523315723979?text=${encodeURIComponent(mensaje)}`;
    window.open(enlaceWhatsApp, "_blank");
    setFormData({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
    setFormularioVisible(false);
  };

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
          <h1 className="text-white font-bold text-lg">Nuestros Asesores</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Nuestro Equipo de Asesores</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Contamos con un equipo profesional y experimentado listo para brindarte la mejor asesoría personalizada en todos nuestros servicios.
          </p>
        </div>
      </section>

      {/* Grid de Asesores */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {asesores.map((asesor) => (
              <Card
                key={asesor.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border cursor-pointer"
                onClick={() => setAsesorSeleccionado(asesor)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={asesor.imagen}
                    alt={asesor.nombre}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary mb-1">{asesor.nombre}</h3>
                  <p className="text-sm text-primary/80 font-medium mb-2">{asesor.especialidad}</p>
                  <div className="flex items-center gap-1 text-xs text-foreground/60 mb-3">
                    <Award size={14} />
                    <span>{asesor.años} años de experiencia</span>
                  </div>
                  <p className="text-xs text-foreground/70 line-clamp-2 mb-4">{asesor.descripcion}</p>
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAsesorSeleccionado(asesor);
                    }}
                  >
                    Ver Perfil
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Consultas */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
            <h2 className="text-2xl font-bold text-primary mb-4">¿Necesitas Asesoría?</h2>
            <p className="text-foreground/70 mb-6">
              Completa el formulario y nos pondremos en contacto a través de WhatsApp para brindarte la mejor asesoría personalizada.
            </p>
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => setFormularioVisible(!formularioVisible)}
            >
              {formularioVisible ? "Cancelar" : "Solicitar Consulta"}
            </Button>

            {formularioVisible && (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Asunto</label>
                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Asunto de tu consulta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Cuéntanos tu consulta"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-green-500 hover:bg-green-600">
                  Enviar por WhatsApp
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Modal de Perfil Detallado */}
      {asesorSeleccionado && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setAsesorSeleccionado(null)}
        >
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <button
                  onClick={() => setAsesorSeleccionado(null)}
                  className="text-foreground/60 hover:text-foreground text-2xl ml-auto"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={asesorSeleccionado.imagen}
                    alt={asesorSeleccionado.nombre}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    {asesorSeleccionado.nombre}
                  </h2>
                  <p className="text-lg text-primary/80 font-semibold mb-4">
                    {asesorSeleccionado.especialidad}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Experiencia</p>
                        <p className="text-foreground/70">{asesorSeleccionado.años} años en el sector</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Especialización</p>
                        <p className="text-foreground/70">{asesorSeleccionado.experiencia}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Habilidades</h3>
                    <div className="flex flex-wrap gap-2">
                      {asesorSeleccionado.habilidades.map((habilidad, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {habilidad}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {asesorSeleccionado.descripcion}
                </p>

                <a
                  href={`https://wa.me/${asesorSeleccionado.telefono}?text=Hola, me gustaría una consulta con ${asesorSeleccionado.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Contactar por WhatsApp
                  </Button>
                </a>
              </div>
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
