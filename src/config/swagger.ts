import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SmartHabits API',
      version: '1.0.0',
      description: 'API para administrar usuarios y hábitos',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
      {
        url: 'https://faint-veriee-jafas2025-0eb62b72.koyeb.app/',
      },
    ],
  },

  apis: ['./src/modules/**/*.ts'], 
};

export const swaggerSpec = swaggerJSDoc(options);
