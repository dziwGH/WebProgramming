import express from 'express';
import Skill from '../models/Skill.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
