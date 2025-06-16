import express from 'express';
import userRoutes from './modules/user/user.routes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello, Smart Habits!');
});

app.use('/api/users', userRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
