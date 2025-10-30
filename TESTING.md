# Testing Guide

Este proyecto utiliza Jest para testing y GitHub Actions para CI/CD.

## Ejecutar Tests

### Localmente

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch (útil durante desarrollo)
npm run test:watch

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo CI
npm run test:ci
```

## Estructura de Tests

Los tests se encuentran en el directorio `src/__tests__/`:

- `api.test.ts` - Tests de integración general del API
- `modules/` - Tests específicos de cada módulo
  - `auth.test.ts` - Tests del módulo de autenticación

## Configuración de Tests

- **jest.config.js** - Configuración principal de Jest
- **src/__tests__/setup.ts** - Setup global para todos los tests

## Variables de Entorno para Tests

Los tests utilizan variables de entorno de prueba definidas en `src/__tests__/setup.ts`. Para tests locales con base de datos real, puedes crear un archivo `.env.test`.

## GitHub Actions

### Workflows Disponibles

1. **CI - Build and Validate** (`.github/workflows/ci.yml`)
   - Ejecuta en cada PR a cualquier rama
   - Valida:
     - Build del proyecto
     - Type checking con TypeScript
     - Schema de Prisma
     - Formato de Prisma

2. **Test Suite** (`.github/workflows/test.yml`)
   - Ejecuta en cada PR a cualquier rama
   - Corre todos los tests con cobertura
   - Genera reportes de cobertura
   - Sube reportes como artifacts

### Ver Resultados

Los resultados de los workflows se pueden ver en:
- La pestaña "Actions" del repositorio en GitHub
- En el PR como checks
- Los reportes de cobertura se suben como artifacts

## Cobertura de Tests

La cobertura se genera en el directorio `coverage/`:
- `coverage/lcov-report/index.html` - Reporte visual HTML
- `coverage/lcov.info` - Datos de cobertura en formato LCOV

## Agregar Nuevos Tests

Para agregar tests a un módulo:

1. Crea un archivo `<module>.test.ts` en `src/__tests__/modules/`
2. Importa las dependencias necesarias:
   ```typescript
   import request from 'supertest';
   import { app } from '../../index';
   ```
3. Escribe tus tests usando Jest y Supertest

### Ejemplo básico:

```typescript
describe('Mi Módulo', () => {
  it('debería hacer algo', async () => {
    const response = await request(app)
      .get('/api/mi-endpoint');
    
    expect(response.status).toBe(200);
  });
});
```

## Mejores Prácticas

1. **Nombrado**: Usa descripciones claras en `describe()` e `it()`
2. **Aislamiento**: Cada test debe ser independiente
3. **Limpieza**: Limpia datos de prueba en `afterEach()` o `afterAll()`
4. **Mocks**: Mockea servicios externos cuando sea necesario
5. **Cobertura**: Apunta a al menos 80% de cobertura

## Troubleshooting

### Error: DATABASE_URL no encontrada
- Asegúrate de que las variables de entorno estén configuradas en `setup.ts`
- Para tests con BD real, configura `.env.test`

### Tests fallan en CI pero pasan localmente
- Verifica que las dependencias estén en `package.json`
- Revisa que no uses configuración local específica
- Asegúrate de que `npm ci` funcione correctamente
