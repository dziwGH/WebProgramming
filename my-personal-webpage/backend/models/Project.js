import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  technologies: [String],
  githubUrl: String,
  date: { type: Date, default: Date.now } // Optional but useful
});

const Project = mongoose.model('Project', projectSchema, 'projects');
export default Project;