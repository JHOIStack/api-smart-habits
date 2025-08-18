/**
 * @swagger
 * tags:
 *   name: ML
 *   description: Operaciones relacionadas con Machine Learning (supervisado y no supervisado)
 */

/**
 * @swagger
 * /api/ml/supervised:
 *   get:
 *     summary: Obtener resultados de ML supervisado
 *     tags: [ML]
 *     responses:
 *       200:
 *         description: Resultados del modelo supervisado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SupervisedResult'
 *       500:
 *         description: Error al obtener datos del ML supervisado
 */

/**
 * @swagger
 * /api/ml/unsupervised:
 *   get:
 *     summary: Obtener resultados de ML no supervisado
 *     tags: [ML]
 *     responses:
 *       200:
 *         description: Resultados del modelo no supervisado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnsupervisedResult'
 *       500:
 *         description: Error al obtener datos del ML no supervisado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SupervisedResult:
 *       type: object
 *       properties:
 *         predictions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *                 example: "ECO_PRINCIPIANTE"
 *               probability:
 *                 type: number
 *                 format: float
 *                 example: 0.85
 *         modelInfo:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "RandomForestClassifier"
 *             version:
 *               type: string
 *               example: "1.0.0"
 *     UnsupervisedResult:
 *       type: object
 *       properties:
 *         clusters:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               clusterId:
 *                 type: integer
 *                 example: 1
 *               members:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "user123"
 *         modelInfo:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "KMeans"
 *             version:
 *               type: string
 *               example: "1.0.0"
 */