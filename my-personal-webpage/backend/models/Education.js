import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String
  },
  description: {
    type: String
  },
  location: {
    type: String
  }
}, { timestamps: true });

const Education = mongoose.model('Education', educationSchema, 'education');

export default Education;
