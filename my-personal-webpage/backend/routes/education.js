import express from 'express';
import Education from '../models/Education.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
