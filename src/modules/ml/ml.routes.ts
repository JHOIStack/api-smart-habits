import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

const PYTHON_API_URL = 'http://localhost:8000';

router.get('/supervised', async (_req, res) => {
  try {
    const response = await fetch(`${PYTHON_API_URL}/ml/supervised`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener datos del ML supervisado' });
  }
});

router.get('/unsupervised', async (_req, res) => {
  try {
    const response = await fetch(`${PYTHON_API_URL}/ml/unsupervised`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener datos del ML no supervisado' });
  }
});

export default router;
