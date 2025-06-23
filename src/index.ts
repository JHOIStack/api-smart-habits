import express from 'express';
import userRoutes from './modules/user/user.routes';
import habitRoutes from './modules/habit/habit.routes';
import userHabitRoutes from './modules/user-habit/user-habit.routes';
import profileRoutes from './modules/profile/profile.routes';
import recommendationRoutes from './modules/recommendation/recommendation.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello, Smart Habits!');
});

app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/user-habits', userHabitRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
