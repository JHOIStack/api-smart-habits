/**
 * @swagger
 * tags:
 *   name: Habits
 *   description: Operaciones relacionadas con hábitos
 */

/**
 * @swagger
 * /api/habits:
 *   get:
 *     summary: Obtener todos los hábitos
 *     tags: [Habits]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Límite de hábitos a retornar
 *     responses:
 *       200:
 *         description: Lista de hábitos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habit'
 *   post:
 *     summary: Crear un nuevo hábito
 *     tags: [Habits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HabitCreate'
 *     responses:
 *       201:
 *         description: Hábito creado exitosamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /api/habits/{id}:
 *   get:
 *     summary: Obtener hábito por ID
 *     tags: [Habits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del hábito
 *     responses:
 *       200:
 *         description: Hábito encontrado
 *       404:
 *         description: Hábito no encontrado
 *   put:
 *     summary: Actualizar un hábito
 *     tags: [Habits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del hábito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HabitUpdate'
 *     responses:
 *       200:
 *         description: Hábito actualizado
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Hábito no encontrado
 *   delete:
 *     summary: Eliminar un hábito
 *     tags: [Habits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del hábito
 *     responses:
 *       204:
 *         description: Hábito eliminado
 *       404:
 *         description: Hábito no encontrado
 */

/**
 * @swagger
 * /api/habits/count:
 *   get:
 *     summary: Obtener el número total de hábitos
 *     tags: [Habits]
 *     responses:
 *       200:
 *         description: Número total de hábitos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 10
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Habit:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           example: "Instalar paneles solares"
 *         category:
 *           type: string
 *           example: "ENERGIA"
 *         description:
 *           type: string
 *           example: "Genera energía renovable en casa si es viable."
 *     HabitCreate:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           example: "Instalar paneles solares"
 *         category:
 *           type: string
 *           example: "ENERGIA"
 *         description:
 *           type: string
 *           example: "Genera energía renovable en casa si es viable."
 *     HabitUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Instalar paneles solares"
 *         category:
 *           type: string
 *           example: "ENERGIA"
 *         description:
 *           type: string
 *           example: "Prioriza la instalación de paneles solares."
 */