import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Local path to the image
    required: true,
  },
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
