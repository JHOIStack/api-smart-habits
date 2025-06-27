/**
 * @swagger
 * tags:
 *   name: Recommendations
 *   description: Operaciones relacionadas con recomendaciones
 */

/**
 * @swagger
 * /api/recommendations:
 *   get:
 *     summary: Obtener todas las recomendaciones
 *     tags: [Recommendations]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Límite de usuarios a retornar
 *     responses:
 *       200:
 *         description: Lista de recomendaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recommendation'
 *   post:
 *     summary: Crear una nueva recomendación
 *     tags: [Recommendations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecommendationCreate'
 *     responses:
 *       201:
 *         description: Recomendación creada exitosamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /api/recommendations/{id}:
 *   get:
 *     summary: Obtener recomendación por ID
 *     tags: [Recommendations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID de la recomendación
 *     responses:
 *       200:
 *         description: Recomendación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recommendation'
 *       404:
 *         description: Recomendación no encontrada
 *   put:
 *     summary: Actualizar una recomendación
 *     tags: [Recommendations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID de la recomendación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecommendationUpdate'
 *     responses:
 *       200:
 *         description: Recomendación actualizada
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Recomendación no encontrada
 *   delete:
 *     summary: Eliminar una recomendación
 *     tags: [Recommendations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID de la recomendación
 *     responses:
 *       204:
 *         description: Recomendación eliminada
 *       404:
 *         description: Recomendación no encontrada
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Recommendation:
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
 *         message:
 *           type: string
 *           example: "Recuerda apagar las luces al salir de casa"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-06-26T12:00:00.000Z"
 *         shownTime:
 *           type: string
 *           example: "07:30"
 *     RecommendationCreate:
 *       type: object
 *       required:
 *         - userId
 *         - message
 *         - shownTime
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "321e4567-e89b-12d3-a456-426614174000"
 *         message:
 *           type: string
 *           example: "Recuerda apagar las luces al salir de casa"
 *         shownTime:
 *           type: string
 *           example: "07:30"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-06-26T12:00:00.000Z"
 *     RecommendationUpdate:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "321e4567-e89b-12d3-a456-426614174000"
 *         message:
 *           type: string
 *           example: "Recuerda apagar las luces al salir de casa"
 *         shownTime:
 *           type: string
 *           example: "07:30"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-06-26T12:00:00.000Z"
 */