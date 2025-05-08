import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['chat', 'quiz'],
    default: 'quiz'
  },
  questionType: {
    type: String,
    enum: ['multiple-choice', 'true-false', 'open-ended', 'mixed'],
    default: 'multiple-choice'
  },
  topic: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;
