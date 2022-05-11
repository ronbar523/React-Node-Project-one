const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

const userSystemRouter = require("./routes/userSystem");
const reviewsSystemRouter = require("./routes/reviewsSystem");
const categoriesSystemRouter = require("./routes/categoriesSystem");
const productSystemRouter = require("./routes/productSystem");

const middlewareRouter = require("./middleware/authMiddleware");

const PORT = 8000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

mongoose
  .connect("mongodb://localhost/new")
  .then(() => console.log({ msg: "connected to database" }))
  .catch((err) => console.log(err));

app.use("/reviews", reviewsSystemRouter);
app.use("/user", userSystemRouter);
app.use("/categories", categoriesSystemRouter);
app.use("/products", productSystemRouter);

module.exports = app;
