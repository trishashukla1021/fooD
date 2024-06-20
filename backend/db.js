const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected");
    
    const db = mongoose.connection.db;
    const fetched_data = await db.collection("food_items").find({}).toArray();
    const foodCategory = await db.collection("food_category").find({}).toArray();
    global.food_items=fetched_data;
    global.foodCategory=foodCategory;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoDB;
