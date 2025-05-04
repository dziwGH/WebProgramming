import express from 'express';
import Skill from '../models/Skills.js';

const router = express.Router();

// GET all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);  // Send back the skills as JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
