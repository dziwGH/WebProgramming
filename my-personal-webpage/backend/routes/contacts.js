// routes/contacts.js
import express from 'express';
import Contact from '../models/ContactMessage.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message saved!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// app.use('*', (req, res) => {
//   res.status(404).send('Route not found');
// });

export default router;
