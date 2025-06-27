/**
 * @swagger
 * tags:
 *   name: UserHabits
 *   description: Operaciones relacionadas con los hábitos de usuario
 */

/**
 * @swagger
 * /api/user-habits:
 *   get:
 *     summary: Obtener todos los hábitos de usuario
 *     tags: [UserHabits]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Límite de usuarios a retornar
 *     responses:
 *       200:
 *         description: Lista de hábitos de usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserHabit'
 *   post:
 *     summary: Crear un nuevo hábito de usuario
 *     tags: [UserHabits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserHabitCreate'
 *     responses:
 *       201:
 *         description: Hábito de usuario creado exitosamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /api/user-habits/{id}:
 *   get:
 *     summary: Obtener hábito de usuario por ID
 *     tags: [UserHabits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del hábito de usuario
 *     responses:
 *       200:
 *         description: Hábito de usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserHabit'
 *       404:
 *         description: Hábito de usuario no encontrado
 *   put:
 *     summary: Actualizar un hábito de usuario
 *     tags: [UserHabits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del hábito de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserHabitUpdate'
 *     responses:
 *       200:
 *         description: Hábito de usuario actualizado
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Hábito de usuario no encontrado
 *   delete:
 *     summary: Eliminar un hábito de usuario
 *     tags: [UserHabits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del hábito de usuario
 *     responses:
 *       204:
 *         description: Hábito de usuario eliminado
 *       404:
 *         description: Hábito de usuario no encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserHabit:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "002e7950-3719-46a9-a9a4-7aec81b5d161"
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "ebde3205-8654-4a15-8b85-b360fd8339aa"
 *         habitId:
 *           type: string
 *           format: uuid
 *           example: "d79e3f0b-68d4-4dc6-a7c1-54166ea66333"
 *         status:
 *           type: string
 *           enum: [ACTIVO, PAUSADO, COMPLETADO, CANCELADO]
 *           example: "ACTIVO"
 *         scheduledTime:
 *           type: string
 *           example: "7:00"
 *         completedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: null
 *     UserHabitCreate:
 *       type: object
 *       required:
 *         - userId
 *         - habitId
 *         - status
 *         - scheduledTime
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "ebde3205-8654-4a15-8b85-b360fd8339aa"
 *         habitId:
 *           type: string
 *           format: uuid
 *           example: "d79e3f0b-68d4-4dc6-a7c1-54166ea66333"
 *         status:
 *           type: string
 *           enum: [ACTIVO, PAUSADO, COMPLETADO, CANCELADO]
 *           example: "ACTIVO"
 *         scheduledTime:
 *           type: string
 *           example: "7:00"
 *         completedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: null
 *     UserHabitUpdate:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           enum: [ACTIVO, PAUSADO, COMPLETADO, CANCELADO]
 *           example: "COMPLETADO"
 *         scheduledTime:
 *           type: string
 *           example: "8:00"
 *         completedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: "2025-06-26T07:00:00.000Z"
 */