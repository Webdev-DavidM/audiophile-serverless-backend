import mongoose from "mongoose";
import connectDB from "../config/db.js";
import products from "./products.js";
import Product from "../models/Product.js";
import users from "./users.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

connectDB();

let hashedUsers;

const importData = async () => {
  console.log("hit");
  try {
    await Product.deleteMany();
    const productList = products.map((product) => {
      return { ...product };
    });
    await Product.insertMany(productList);

    await User.deleteMany();

    const hashUserPassword = async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      return user;
    };

    hashedUsers = await Promise.all(
      users.map((user) => hashUserPassword(user))
    );
    await User.insertMany(hashedUsers);
    console.log("Import successful!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
