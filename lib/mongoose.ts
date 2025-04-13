import mongoose, { Mongoose } from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI as string;

// if mongodb uri is not present throw new error
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// dec global var
declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// connect
const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { dbName: "devflow" })
      .then((result) => {
        console.log("Connected to db");
        return result;
      })
      .catch((error) => {
        console.error("Error connecting db", error);
        throw error;
      });
  }
  cached.conn = await cached.promise;

  return cached.conn;
};

export default dbConnect;
