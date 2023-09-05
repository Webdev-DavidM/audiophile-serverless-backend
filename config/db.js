import mongoose from "mongoose";

console.log(process.env.DATABASE);

// adjust the data connection below as required.

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = await mongoose.connection;
    if (db.readyState === 1) {
      console.log("were connected!");
    }
    if (db.readyState === 0) {
      console.log("not connected");
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
