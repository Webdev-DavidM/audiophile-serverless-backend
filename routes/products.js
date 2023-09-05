/* NPM packages */

import express from "express";
const app = express();

// with es6 modules i haver to use the full filename with .js otherwise it wont find it unlike in react with babel.
/* Models */

import Product from "../models/Product.js";
import products from "../data/products.js";

// This will return all the products for the search bar //

app.get("/all", async (req, res, next) => {
  console.log("hit");
  const products = await Product.find({});
  if (products) {
    res.status(200).json(products).end();
  } else {
    res.status(401).json("No products found").end();
  }
});

// this will get the products from the database which match the url param category
// Define a route that accepts a category parameter in the URL
app.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params; // Get the category parameter from the URL
    console.log(category);

    // Use Mongoose to find products matching the category
    const products = await Product.find({ category });

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/product/:slug", async (req, res) => {
  try {
    const { slug } = req.params; // Get the category parameter from the URL

    // Use Mongoose to find products matching the category
    const products = await Product.find({ slug });

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/import", async (req, res, next) => {
  console.log("hit");
  try {
    await Product.deleteMany();
    const productList = products.map((product) => {
      return { ...product };
    });
    await Product.insertMany(productList);

    // await User.deleteMany();

    // const hashUserPassword = async (user) => {
    //   const hashedPassword = await bcrypt.hash(user.password, 10);
    //   user.password = hashedPassword;
    //   return user;
    // };

    // hashedUsers = await Promise.all(
    //   users.map((user) => hashUserPassword(user))
    // );
    // await User.insertMany(hashedUsers);
    // console.log("Import successful!");
    // process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
});

// GET request- return all the products, I will let redux choose which
// Products to display based on the category and subcategory properties

// app.get("/:category", async (req, res, next) => {
//   let { category } = req.params;
//   try {
//     let products = await Product.find({ category });
//     if (products) {
//       res.status(200).json(products).end();
//     } else {
//       res.status(401).json(`No ${category} found`).end();
//     }
//   } catch (err) {
//     let error = new Error("Opps something went wrong");
//     next(error);
//   }
// });

// // Get one Product from the document

// app.get("/product/:id", async (req, res, next) => {
//   try {
//     let product = await Product.findOne({ _id: req.params.id });
//     if (product) {
//       res.status(200).json(product).end();
//     } else {
//       res.status(401).json("No product found").end();
//     }
//   } catch (err) {
//     let error = new Error("Opps something went wrong");
//     next(error);
//   }
// });

// // POST route- this will post a review to a product, this route doesnt require
// // JWT verification as the user must have been verified on the front end to be accessing
// // their account screen

// app.post("/review/:productId", async (req, res, next) => {
//   let review = req.body.data;
//   let { productId } = req.params;

//   try {
//     let product = await Product.findOne({ _id: productId });
//     if (product) {
//       let duplicateReview = product.reviews.filter(
//         (reviewInDatabase) => reviewInDatabase.userId === review.userId
//       );
//       if (duplicateReview.length === 0) {
//         product.reviews.push(review);
//         await product.save();
//         return res.status(200).json(product).end();
//       } else {
//         res
//           .status(406)
//           .json({ error: "You have reviewed this product already" })
//           .end();
//       }
//     } else {
//       res.status(401).json("No product found").end();
//     }
//   } catch (err) {
//     let error = new Error("Opps something went wrong");
//     next(error);
//   }
// });

export default app;
