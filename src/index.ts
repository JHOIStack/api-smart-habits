import express from 'express';
import userRoutes from './modules/user/user.routes';
import habitRoutes from './modules/habit/habit.routes';
import userHabitRoutes from './modules/user-habit/user-habit.routes';
import profileRoutes from './modules/profile/profile.routes';
import recommendationRoutes from './modules/recommendation/recommendation.routes';
import interactionRoutes from './modules/interaction/interaction.routes';
import statsRoutes from './modules/stats/stats.routes';
import authRouter from './modules/auth/auth.routes';
import mlRoutes from './modules/ml/ml.routes';
import { errorHandler } from './middlewares/error.middleware';

import cors from 'cors';
import morgan from "morgan"

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Rutas
app.get('/', (_req, res) => {
  res.send('Hello, Smart Habits!');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/ml', mlRoutes);
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/user-habits', userHabitRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/interactions', interactionRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/auth', authRouter);

app.use((_req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`\nServer running on http://localhost:${PORT}\nSwagger docs available at http://localhost:${PORT}/docs`);
});
