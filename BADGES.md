# Badges para README.md

Una vez que subas el código a GitHub, puedes agregar estos badges al inicio de tu README.md:

## Badges de GitHub Actions

```markdown
![CI - Build and Validate](https://github.com/JHOIStack/api-smart-habits/workflows/CI%20-%20Build%20and%20Validate/badge.svg)
![Test Suite](https://github.com/JHOIStack/api-smart-habits/workflows/Test%20Suite/badge.svg)
```

## Badge de Codecov (opcional)

Si configuras Codecov:

```markdown
[![codecov](https://codecov.io/gh/JHOIStack/api-smart-habits/branch/main/graph/badge.svg)](https://codecov.io/gh/JHOIStack/api-smart-habits)
```

## Otros Badges Útiles

```markdown
![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![License](https://img.shields.io/badge/license-ISC-blue)
```

## Ejemplo de README con Badges

```markdown
# API Smart Habits

![CI - Build and Validate](https://github.com/JHOIStack/api-smart-habits/workflows/CI%20-%20Build%20and%20Validate/badge.svg)
![Test Suite](https://github.com/JHOIStack/api-smart-habits/workflows/Test%20Suite/badge.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)

> API para gestión de hábitos inteligentes

[Tu contenido actual del README aquí...]
```

## Cómo Funcionan los Badges

Los badges se generan automáticamente por GitHub Actions una vez que:
1. Hayas hecho push del código a GitHub
2. Los workflows se hayan ejecutado al menos una vez
3. Los badges mostrarán el estado actual (passing/failing)

Los badges se actualizan automáticamente con cada push o PR.
