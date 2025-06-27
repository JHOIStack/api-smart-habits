/**
 * @swagger
 * tags:
 *   name: Profiles
 *   description: Operaciones relacionadas con los perfiles de usuario
 */

/**
 * @swagger
 * /api/profiles:
 *   get:
 *     summary: Obtener todos los perfiles
 *     tags: [Profiles]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Límite de perfiles a retornar
 *     responses:
 *       200:
 *         description: Lista de perfiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 *   post:
 *     summary: Crear un nuevo perfil
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfileCreate'
 *     responses:
 *       201:
 *         description: Perfil creado exitosamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /api/profiles/{id}:
 *   get:
 *     summary: Obtener perfil por ID
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del perfil
 *     responses:
 *       200:
 *         description: Perfil encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: Perfil no encontrado
 *   put:
 *     summary: Actualizar un perfil
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del perfil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfileUpdate'
 *     responses:
 *       200:
 *         description: Perfil actualizado
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Perfil no encontrado
 *   delete:
 *     summary: Eliminar un perfil
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del perfil
 *     responses:
 *       204:
 *         description: Perfil eliminado
 *       404:
 *         description: Perfil no encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "b1c2d3e4-f5a6-7890-1234-56789abcdef0"
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
 *         profileType:
 *           type: string
 *           enum: [ECO_PRINCIPIANTE, ECO_AVANZADO, ECO_EXPERTO]
 *           example: "ECO_PRINCIPIANTE"
 *         assignedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-06-25T12:00:00.000Z"
 *     ProfileCreate:
 *       type: object
 *       required:
 *         - userId
 *         - profileType
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
 *         profileType:
 *           type: string
 *           enum: [ECO_PRINCIPIANTE, ECO_AVANZADO, ECO_EXPERTO]
 *           example: "ECO_PRINCIPIANTE"
 *         assignedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-06-25T12:00:00.000Z"
 *     ProfileUpdate:
 *       type: object
 *       properties:
 *         profileType:
 *           type: string
 *           enum: [ECO_PRINCIPIANTE, ECO_AVANZADO, ECO_EXPERTO]
 *           example: "ECO_AVANZADO"
 *         assignedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-07-01T09:00:00.000Z"
 */