import mongoose from 'mongoose';

const UserBot = mongoose.model('UserBot', {
  name: String,
  dateOfBirth: Number,
  email: String,
  phone: Number,
});

export default UserBot;
