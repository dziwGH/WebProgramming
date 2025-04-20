const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// pages
router.get('/', mainController.getHome);
router.get('/projects', mainController.getProjects);router.get('/education', mainController.getEducation);
router.get('/skills', mainController.getSkills);
router.get('/contact', mainController.getContact);

// contact
router.post('/contact', mainController.postContact);

module.exports = router;