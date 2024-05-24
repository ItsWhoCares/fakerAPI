const express = require("express");
const app = express();

const port = process.env.PORT || 443;

const personRouter = require("./routes/persons");
const addressRouter = require("./routes/address");
const booksRouter = require("./routes/books");
const companiesRouter = require("./routes/companies");
const credit_cardsRouter = require("./routes/credit_cards");
const imagesRouter = require("./routes/images");
const placesRouter = require("./routes/places");
const productsRouter = require("./routes/products");
const textsRouter = require("./routes/texts");
const usersRouter = require("./routes/users");
const customRouter = require("./routes/custom");

app.get("/api/v1", (req, res) => {
  res.json({
    name: "John Doe",
  });
});

app.use("/api/v1", addressRouter);
app.use("/api/v1", personRouter);
app.use("/api/v1", booksRouter);
app.use("/api/v1", companiesRouter);
app.use("/api/v1", credit_cardsRouter);
app.use("/api/v1", imagesRouter);
app.use("/api/v1", placesRouter);
app.use("/api/v1", productsRouter);
app.use("/api/v1", textsRouter);
app.use("/api/v1", usersRouter);
app.use("/api/v1", customRouter);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
const http = require("http");
http.createServer(app).listen(80, () => {
  console.log(`Example app listening on port 80`);
});
