const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kushal:mongo123@cluster0.ido3g1l.mongodb.net/inotebook?appName=Cluster0"
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

module.exports = connectToMongo;