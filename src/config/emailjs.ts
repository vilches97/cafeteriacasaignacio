// Configuración de EmailJS
// Reemplaza estos valores con los tuyos de EmailJS

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "Ypix9ClGK9NV6njoj",
  SERVICE_ID: "service_k9lkg7v", 
  TEMPLATE_ID: "template_aarf9f8",
  TO_EMAIL: "cafeteriacasaignacio@outlook.es" // Tu correo electrónico
};

// Instrucciones para configurar EmailJS:
/*
1. Ve a https://www.emailjs.com/
2. Regístrate y crea una cuenta gratuita
3. Crea un nuevo servicio de email (Service ID)
4. Crea una plantilla de email (Template ID) con estas variables:
   - {{from_name}} - Nombre del cliente
   - {{message}} - La opinión
   - {{rating}} - Valoración (1-5 estrellas)
   - {{to_email}} - Tu correo electrónico
5. Copia tu Public Key desde Account -> General
6. Reemplaza los valores arriba con los tuyos
7. ¡Listo! Las opiniones llegarán a tu correo
*/
