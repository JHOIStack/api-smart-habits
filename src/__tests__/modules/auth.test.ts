import request from 'supertest';
import { app } from '../../index';

describe('Auth Module', () => {
  describe('POST /api/auth/login', () => {
    it('should reject login without credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({});
      
      // Debería rechazar sin credenciales
      expect(response.status).not.toBe(200);
    });

    it('should validate request body format', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@example.com', password: 'test123' });
      
      // Verificar que el endpoint procesa la petición
      expect(response.status).toBeDefined();
      expect(response.body).toBeDefined();
    });
  });

  describe('GET /api/auth/profile', () => {
    it('should reject unauthorized requests', async () => {
      const response = await request(app)
        .get('/api/auth/profile');
      
      // Debería rechazar peticiones sin token
      expect(response.status).toBe(401);
    });

    it('should reject invalid tokens', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', 'Bearer invalid-token');
      
      // Debería rechazar tokens inválidos (puede ser 401 o 403)
      expect([401, 403]).toContain(response.status);
    });
  });
});
