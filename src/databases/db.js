import mongoose from "mongoose";
const DBConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected!");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export { DBConnect };
