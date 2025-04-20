const Project = require('../models/Project');
const Education = require('../models/Education');
const Skill = require('../models/Skill');
const ContactMessage = require('../models/ContactMessage');

module.exports = {
  getHome: (req, res) => {
    res.render('home');
  },
  getProjects: async (req, res) => {
    const projects = await Project.find();
    res.render('projects', { projects });
  },
  getEducation: async (req, res) => {
    const education = await Education.find();
    res.render('education', { education });
  },
  getSkills: async (req, res) => {
    const skills = await Skill.find();
    res.render('skills', { skills });
  },
  getContact: (req, res) => {
    res.render('contact');
  },
  postContact: async (req, res) => {
    const { name, email, message } = req.body;
    await ContactMessage.create({ name, email, message });
    res.redirect('/contact');
  }
};
