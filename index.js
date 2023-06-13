const express = require("express");
const CORS = require("cors");
const dotenv = require("dotenv");
const port = 5000;
const Auth = require("./auth/Auth");
const DataRoute = require("./router/DataRoute");
const app = express();

// dotEvn configuration...
dotenv.config();

// dataBase connection...
require("./Database/conn");

// middleWares....
app.use(express.json());

app.use(
  CORS({
    origin: ["http://localhost:3000", "https://demo-task-client.vercel.app/"],
    credentials: true,
  })
);

// routes...

app.use("/auth", Auth);
app.use("/data", DataRoute);

app.get("/", (req, res) => {
  res.send("hello form server").status(200);
});

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${port}`);
});
