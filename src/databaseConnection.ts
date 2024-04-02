import mongoose from 'mongoose';
import config from './config';

if (!config.MONGODB_URI) throw new Error('MONGODB_URI environment variable is not set');

const dbConnectionPromise = mongoose.connect(config.MONGODB_URI);

export default dbConnectionPromise;