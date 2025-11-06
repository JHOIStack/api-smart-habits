// Setup global test configuration

// Set test environment variables
process.env.DATABASE_URL = process.env.DATABASE_URL || "postgresql://test:test@localhost:5432/test_db?schema=public";
process.env.JWT_SECRET = process.env.JWT_SECRET || "test-jwt-secret-key";
process.env.NODE_ENV = "test";

beforeAll(() => {
  // Configuración global antes de todos los tests
});

afterAll(() => {
  // Limpieza después de todos los tests
});
