const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hackatchon-3 API",
      version: "1.0.0",
      description: "Документация к запросам на бэкенде",
    },
    servers: [{ url: `http://localhost:${process.env.PORT}` }],
  },
  apis: ["./swagger/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get("/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/images", express.static("images"));

app.use(require("./routes/user.route"));
app.use(require("./routes/universityNews.route"));
app.use(require('./routes/dormitore.route'));
app.use(require("./routes/university.route"));


const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SERVER);
    console.log("Подключились к базе");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  console.log("Подключились к серверу");
});

start();
