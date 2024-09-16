import mongoose from 'mongoose';
// import { MONGO_DB_VARS } from '../constants';
import { env } from '../utils/env.js';

export const initMongoDB = async () => {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const bd = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}${url}/${bd}?retryWrites=true&w=majority`,
    );
    console.log('mongoDB connection successful established!');
  } catch (error) {
    console.log('Error while connection to mongoDB', error);
    throw error;
  }
};
