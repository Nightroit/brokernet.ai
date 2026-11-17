const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ishivam3141_db_user@admin:ishivam3141_db_user@broketnetai cluster0.xxxxx.mongodb.net/broketnet?retryWrites=true&w=majority");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;