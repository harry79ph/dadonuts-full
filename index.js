require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const auth = require("./routes/auth-routes");
const users = require("./routes/user-routes");
const PORT = process.env.PORT || 3500;
const USER_ROUTE = process.env.USER_ROUTE;

const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  methods: ["GET", "POST", "PUT"]
}));
app.use(cookieParser());

app.use(auth);
app.use(USER_ROUTE, users);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
