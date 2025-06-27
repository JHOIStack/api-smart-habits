/**
 * @swagger
 * tags:
 *   name: Interactions
 *   description: Operaciones relacionadas con interacciones de usuario
 */

/**
 * @swagger
 * /api/interactions:
 *   get:
 *     summary: Obtener todas las interacciones
 *     tags: [Interactions]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Límite de usuarios a retornar
 *     responses:
 *       200:
 *         description: Lista de interacciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Interaction'
 *   post:
 *     summary: Crear una nueva interacción
 *     tags: [Interactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InteractionCreate'
 *     responses:
 *       201:
 *         description: Interacción creada exitosamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /api/interactions/{id}:
 *   get:
 *     summary: Obtener interacción por ID
 *     tags: [Interactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID de la interacción
 *     responses:
 *       200:
 *         description: Interacción encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interaction'
 *       404:
 *         description: Interacción no encontrada
 *   put:
 *     summary: Actualizar una interacción
 *     tags: [Interactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID de la interacción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InteractionUpdate'
 *     responses:
 *       200:
 *         description: Interacción actualizada
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Interacción no encontrada
 *   delete:
 *     summary: Eliminar una interacción
 *     tags: [Interactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID de la interacción
 *     responses:
 *       204:
 *         description: Interacción eliminada
 *       404:
 *         description: Interacción no encontrada
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Interaction:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "321e4567-e89b-12d3-a456-426614174000"
 *         type:
 *           type: string
 *           enum: [CLICK, IGNORE, COMPLETE, SKIP]
 *           example: "CLICK"
 *         target:
 *           type: string
 *           example: "habit-123"
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: "2024-06-26T12:34:56.789Z"
 *     InteractionCreate:
 *       type: object
 *       required:
 *         - userId
 *         - type
 *         - target
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "321e4567-e89b-12d3-a456-426614174000"
 *         type:
 *           type: string
 *           enum: [CLICK, IGNORE, COMPLETE, SKIP]
 *           example: "COMPLETE"
 *         target:
 *           type: string
 *           example: "habit-456"
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: "2024-06-26T15:00:00.000Z"
 *     InteractionUpdate:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "321e4567-e89b-12d3-a456-426614174000"
 *         type:
 *           type: string
 *           enum: [CLICK, IGNORE, COMPLETE, SKIP]
 *           example: "SKIP"
 *         target:
 *           type: string
 *           example: "habit-789"
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: "2024-06-26T18:00:00.000Z"
 */
