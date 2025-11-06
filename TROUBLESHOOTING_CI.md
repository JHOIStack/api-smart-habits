# Solución de Problemas Comunes en CI/CD

## Error: Environment variable not found: DATABASE_URL

### Problema
```
Error: Environment variable not found: DATABASE_URL.
  -->  prisma/schema.prisma:13
```

### Causa
Los workflows de GitHub Actions necesitan la variable `DATABASE_URL` para:
1. Generar el Prisma Client
2. Validar el schema de Prisma
3. Ejecutar los tests

### Solución Implementada

Los workflows ahora incluyen variables de entorno de prueba:

```yaml
- name: Generate Prisma Client
  run: npx prisma generate
  env:
    DATABASE_URL: postgresql://user:password@localhost:5432/test_db?schema=public
```

### Por qué funciona

- **No necesita BD real**: Los tests usan las variables de entorno configuradas en `src/__tests__/setup.ts`
- **Prisma solo necesita la variable**: Para generar el cliente, Prisma solo requiere que la variable exista, no que la BD esté disponible
- **Tests sin BD**: Los tests actuales no realizan operaciones reales de BD

---

## Otros Errores Comunes

### Error: npm ci vs npm install

**Síntoma:** Falla en "Install dependencies"

**Solución:**
```bash
# Localmente, regenera package-lock.json
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "fix: update package-lock.json"
```

### Error: Prisma Client no generado

**Síntoma:** `Cannot find module '@prisma/client'`

**Solución:** Asegúrate de ejecutar `npx prisma generate` antes de los tests:
```yaml
- name: Generate Prisma Client
  run: npx prisma generate
  env:
    DATABASE_URL: postgresql://...
```

### Error: TypeScript compilation

**Síntoma:** Type errors en el workflow

**Solución:** Ejecuta localmente:
```bash
npx tsc --noEmit
```
Corrige los errores antes de hacer push.

---

## Mejores Prácticas

### 1. Variables de Entorno en CI

**Para tests sin BD real:**
```yaml
env:
  DATABASE_URL: postgresql://user:password@localhost:5432/test_db?schema=public
  JWT_SECRET: test-secret-key
```

**Para tests con BD real (futuro):**
```yaml
services:
  postgres:
    image: postgres:15
    env:
      POSTGRES_PASSWORD: postgres
    options: >-
      --health-cmd pg_isready
      --health-interval 10s
      --health-timeout 5s
      --health-retries 5
```

### 2. Secrets de GitHub

Para valores sensibles:
1. Settings → Secrets and variables → Actions
2. New repository secret
3. Usa en workflows: `${{ secrets.SECRET_NAME }}`

### 3. Testing Local de Workflows

Usa [act](https://github.com/nektos/act) para probar workflows localmente:
```bash
brew install act
act -l  # Listar workflows
act push  # Simular push
```

---

## Debugging

### Ver logs completos

1. Ve a la pestaña "Actions" en GitHub
2. Selecciona el workflow que falló
3. Haz clic en el job que falló
4. Expande los steps para ver detalles

### Re-ejecutar workflow

1. Ve al workflow fallido
2. Click en "Re-run jobs"
3. Selecciona "Re-run failed jobs" o "Re-run all jobs"

### Variables de entorno en el workflow

Agrega este step para debug:
```yaml
- name: Debug Environment
  run: |
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
    echo "DATABASE_URL is set: ${{ env.DATABASE_URL != '' }}"
```

---

## Recursos

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Prisma CI/CD Guide](https://www.prisma.io/docs/guides/deployment/deployment-guides)
- [Jest CI Configuration](https://jestjs.io/docs/configuration#ci-boolean)
