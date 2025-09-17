import mongoose from 'mongoose';

const DBconnected = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ✅ new syntax
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
  }
};

export default DBconnected;
