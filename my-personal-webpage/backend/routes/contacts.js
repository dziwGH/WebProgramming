import express from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = express.Router();

// GET all contact messages
router.get('/', async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new contact message
router.post('/', async (req, res) => {
  const newMessage = new ContactMessage({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
