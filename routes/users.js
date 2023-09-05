/* NPM packages */

import express from "express";
const app = express();

// with es6 modules i haver to use the full filename with .js otherwise it wont find it unlike in react with babel.
/* Models */

import Product from "../models/Users.js";

app.get("/login", async (req, res, next) => {
  console.log("hit");
  const products = await Product.find({});
  if (products) {
    res.status(200).json(products).end();
  } else {
    res.status(401).json("No products found").end();
  }
});

app.get("/login", async (req, res, next) => {
  console.log("hit");
  const products = await Product.find({});
  if (products) {
    res.status(200).json(products).end();
  } else {
    res.status(401).json("No products found").end();
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
