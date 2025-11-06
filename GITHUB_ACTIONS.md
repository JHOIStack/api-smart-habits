# GitHub Actions CI/CD

Este proyecto utiliza GitHub Actions para validación continua de código y tests.

## Workflows Configurados

### 1. CI - Build and Validate (`.github/workflows/ci.yml`)

**Trigger:** Pull Requests a todas las ramas + Push a `main`

**Jobs:**

#### Build and Type Check
- ✅ Checkout del código
- ✅ Setup Node.js 20
- ✅ Instalación de dependencias (`npm ci`)
- ✅ Generación de Prisma Client
- ✅ Type checking con TypeScript
- ✅ Build del proyecto

#### Code Quality Check
- ✅ Verificación de errores de TypeScript
- ✅ Validación de calidad del código

#### Prisma Validate
- ✅ Validación del schema de Prisma
- ✅ Verificación de formato de Prisma

### 2. Test Suite (`.github/workflows/test.yml`)

**Trigger:** Pull Requests a todas las ramas + Push a `main`

**Jobs:**

#### Run Tests
- ✅ Checkout del código
- ✅ Setup Node.js 20
- ✅ Instalación de dependencias
- ✅ Generación de Prisma Client
- ✅ Ejecución de tests con cobertura
- ✅ Upload de reportes de cobertura a Codecov (opcional)
- ✅ Upload de reportes como artifacts

## Estado de los Workflows

Los workflows deben pasar para poder mergear un PR. Puedes ver el estado en:

- Badge en el PR
- Pestaña "Actions" del repositorio
- Sección "Checks" del PR

## Configuración Local vs CI

Los workflows están configurados para:
- Usar `npm ci` en lugar de `npm install` (más rápido y determinístico)
- Ejecutar con `--maxWorkers=2` para optimizar recursos
- Generar reportes de cobertura automáticamente
- Usar variables de entorno de prueba (`DATABASE_URL` y `JWT_SECRET`) para tests sin BD real

## Artifacts Generados

Los siguientes artifacts se generan y almacenan por 7 días:

- **coverage-report**: Reporte completo de cobertura de tests
  - Formato HTML navegable
  - Archivos LCOV

## Variables de Entorno en CI

Los workflows usan variables de entorno de prueba para evitar dependencias de bases de datos reales:

```yaml
DATABASE_URL: postgresql://user:password@localhost:5432/test_db?schema=public
JWT_SECRET: test-jwt-secret-key-for-ci
```

**Nota:** Estas son variables de prueba y no se conectan a bases de datos reales. Los tests están diseñados para funcionar sin BD real usando estas variables mock.

Si necesitas configurar variables de entorno personalizadas para tu CI:

1. Ve a Settings → Secrets and variables → Actions en tu repositorio
2. Agrega nuevos secrets según necesites
3. Actualiza los workflows para usar `${{ secrets.TU_SECRET }}`

## Codecov (Opcional)

Si deseas integrar Codecov para visualización de cobertura:

1. Crea una cuenta en [codecov.io](https://codecov.io)
2. Conecta tu repositorio
3. Agrega el secret `CODECOV_TOKEN` en GitHub:
   - Settings → Secrets and variables → Actions
   - New repository secret
   - Nombre: `CODECOV_TOKEN`
   - Valor: Token de Codecov

## Solución de Problemas

### Workflow falla en "Install dependencies"

Verifica que:
- `package.json` y `package-lock.json` estén sincronizados
- No haya conflictos en las versiones de dependencias

### Workflow falla en "Type Check"

Ejecuta localmente:
```bash
npx tsc --noEmit
```

### Workflow falla en "Run tests"

Ejecuta localmente:
```bash
npm run test:ci
```

### Workflow falla en "Validate Prisma Schema"

Ejecuta localmente:
```bash
npx prisma validate
npx prisma format --check
```

## Mejores Prácticas

1. **Siempre revisar** que los workflows pasen antes de mergear
2. **Ejecutar tests localmente** antes de hacer push
3. **Mantener cobertura alta** (objetivo: >80%)
4. **Revisar reportes** de cobertura en los artifacts
5. **Actualizar workflows** cuando cambien dependencias críticas

## Modificar Workflows

Si necesitas modificar los workflows:

1. Edita los archivos en `.github/workflows/`
2. Los cambios se aplicarán automáticamente en el siguiente push
3. Puedes testear localmente con [act](https://github.com/nektos/act)

## Cache de Dependencias

Los workflows usan cache de npm para acelerar las builds:
- El cache se invalida cuando cambia `package-lock.json`
- GitHub mantiene el cache por 7 días sin uso

## Recursos

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js GitHub Actions](https://github.com/actions/setup-node)
- [Codecov GitHub Action](https://github.com/codecov/codecov-action)
