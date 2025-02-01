export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://ecommerce-sochi.vercel.app'], // Agrega tu URL de frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
      headers: ['Content-Type', 'Authorization'], // Encabezados permitidos
      credentials: true, // Si es necesario enviar cookies o credenciales
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
