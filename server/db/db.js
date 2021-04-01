import mongoose from 'mongoose';
import UserBot from '../models/userBot.model.js';

mongoose.connect('mongodb://localhost:27017/bot', { useNewUrlParser: true, useUnifiedTopology: true });

const newUser = new UserBot({
  name: 'test',
  dateOfBirth: 'test',
  email: 'test',
  phone: 'test',
});

newUser.save().then(() => console.log('newUser save'));
