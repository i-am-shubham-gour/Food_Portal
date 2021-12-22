const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const URI =
      "mongodb+srv://Shub2354:Shub%402354@myprojects.c6kv9.mongodb.net/Food_websiteSample?retryWrites=true&w=majority";
    await mongoose.connect(URI);
    console.log("Database connect successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
