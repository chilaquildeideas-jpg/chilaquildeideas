/*
  ContactForm Component
  - Validación con React Hook Form y Zod
  - Campos: nombre, email, teléfono, asunto, mensaje
  - Envío a través de WhatsApp
  - Feedback visual con toast notifications
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";

// Schema de validación
const contactFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  telefono: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  asunto: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Número de WhatsApp de Hermanos Fonseca (sin formato, solo dígitos)
const WHATSAPP_NUMBER = "523315723979";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    try {
      // Construir el mensaje para WhatsApp
      const mensaje = `
*Nuevo mensaje de contacto desde la web*

*Nombre:* ${data.nombre}
*Email:* ${data.email}
*Teléfono:* ${data.telefono}
*Asunto:* ${data.asunto}

*Mensaje:*
${data.mensaje}
      `.trim();

      // Codificar el mensaje para URL
      const mensajeEncodificado = encodeURIComponent(mensaje);

      // Crear URL de WhatsApp
      const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeEncodificado}`;

      // Mostrar notificación de éxito
      toast.success("¡Abriendo WhatsApp!", {
        description: "Se abrirá una conversación con nuestro equipo.",
      });

      // Abrir WhatsApp en nueva pestaña
      window.open(urlWhatsApp, "_blank");

      // Limpiar formulario
      reset();
    } catch (error) {
      toast.error("Error al procesar el mensaje", {
        description: "Por favor, intenta nuevamente.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nombre */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Nombre Completo
        </label>
        <Input
          {...register("nombre")}
          placeholder="Tu nombre"
          className="w-full"
        />
        {errors.nombre && (
          <p className="text-destructive text-sm mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Correo Electrónico
        </label>
        <Input
          {...register("email")}
          type="email"
          placeholder="tu@email.com"
          className="w-full"
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Teléfono
        </label>
        <Input
          {...register("telefono")}
          placeholder="(33) 15 72 3979"
          className="w-full"
        />
        {errors.telefono && (
          <p className="text-destructive text-sm mt-1">{errors.telefono.message}</p>
        )}
      </div>

      {/* Asunto */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Asunto
        </label>
        <Input
          {...register("asunto")}
          placeholder="¿En qué podemos ayudarte?"
          className="w-full"
        />
        {errors.asunto && (
          <p className="text-destructive text-sm mt-1">{errors.asunto.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Mensaje
        </label>
        <Textarea
          {...register("mensaje")}
          placeholder="Cuéntanos tu consulta o comentario..."
          className="w-full min-h-32"
        />
        {errors.mensaje && (
          <p className="text-destructive text-sm mt-1">{errors.mensaje.message}</p>
        )}
      </div>

      {/* Botón de envío */}
      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        Enviar por WhatsApp
      </Button>

      {/* Nota informativa */}
      <p className="text-xs text-foreground/60 text-center">
        Al hacer clic, se abrirá WhatsApp con tu mensaje. Asegúrate de tener WhatsApp instalado.
      </p>
    </form>
  );
}
