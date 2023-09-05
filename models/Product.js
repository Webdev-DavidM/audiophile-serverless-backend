import mongoose from "mongoose";

//please just the name of the model titles as required

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, "Please provide a value for 'id'"],
    },
    stock: {
      type: Number,
      required: [true, "Please provide a value for 'stock'"],
    },
    slug: {
      type: String,
      required: [true, "Please provide a 'slug'"],
    },
    name: {
      type: String,
      required: [true, "Please provide a value for 'name'"],
    },
    image: {
      type: Object,
      required: [true, "Please provide a value for 'size'"],
    },
    category: {
      type: String,
      required: [true, "Please provide a value for 'category'"],
    },
    categoryImage: {
      type: Object,
      required: [true, "Please provide a value for 'category image'"],
    },
    new: {
      type: Boolean,
      required: [true, "Please provide a value for 'new'"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a value for 'price'"],
    },
    description: {
      type: String,
      required: [true, "Please provide a value for 'description'"],
    },
    features: {
      type: String,
      required: [true, "Please provide a value for 'features'"],
    },
    items: {
      type: Array,
      required: [true, "Please provide a value for 'items'"],
    },
    gallery: {
      type: Array,
      required: [true, "Please provide a value for 'gallery"],
    },
    others: {
      type: Array,
      required: [true, "Please provide a value for 'others'"],
    },
    categorySummaryImages: {
      type: Object,
      required: [true, "Please provide a value for 'category summary images'"],
    },
  },

  { useUnifiedTopology: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
