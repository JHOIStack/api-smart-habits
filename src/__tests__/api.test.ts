import request from 'supertest';
import { app } from '../index';

describe('API Smart Habits - Integration Tests', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const response = await request(app).get('/');
      
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello, Smart Habits!');
    });
  });

  describe('GET /docs', () => {
    it('should return swagger documentation page', async () => {
      const response = await request(app).get('/docs/');
      
      expect(response.status).toBe(200);
      expect(response.text).toContain('Swagger UI');
    });
  });

  describe('404 Handler', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/api/non-existent-route');
      
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Not found');
    });
  });

  describe('API Health Checks', () => {
    it('should have users endpoint available', async () => {
      const response = await request(app).get('/api/users');
      
      // No debería devolver 404 (ruta no encontrada)
      expect(response.status).not.toBe(404);
    });

    it('should have habits endpoint available', async () => {
      const response = await request(app).get('/api/habits');
      
      // No debería devolver 404 (ruta no encontrada)
      expect(response.status).not.toBe(404);
    });

    it('should have auth endpoint available', async () => {
      const response = await request(app).post('/api/auth/login');
      
      // No debería devolver 404 (ruta no encontrada)
      expect(response.status).not.toBe(404);
    });
  });

  describe('JSON Parsing', () => {
    it('should parse JSON request bodies', async () => {
      const testData = { test: 'data' };
      const response = await request(app)
        .post('/api/auth/login')
        .send(testData)
        .set('Content-Type', 'application/json');
      
      // Verificar que el servidor acepte JSON
      expect(response.status).not.toBe(400);
    });
  });

  describe('CORS', () => {
    it('should have CORS headers enabled', async () => {
      const response = await request(app).get('/');
      
      expect(response.headers).toHaveProperty('access-control-allow-origin');
    });
  });
});
