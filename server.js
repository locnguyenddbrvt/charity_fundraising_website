const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const store = new MongoDBStore({
  uri: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jyxohlo.mongodb.net/${process.env.MONGO_DATABASE}`,
  collection: "sessions",
});

const userRoutes = require("./routes/userRoutes");
const pageRoutes = require("./routes/pageRoutes");
const User = require("./models/User");

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    session({
      secret: "my secret",
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );
  server.use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
      .then((userResult) => {
        if (!userResult) {
          return next();
        }
        req.user = userResult;
        next();
      })
      .catch((err) => {
        next(new Error(err));
      });
  });
  // handle requests to "/" with NextJS
  server.get("/", (req, res) => {
    return app.render(req, res, "/");
  });

  // handle requests to "/api" with APIs
  server.use("/api", (req, res, next) => {
    // res.send("APIs");
    console.log("apicall");
    next();
  });
  server.use("/api/page", pageRoutes);
  server.use("/api/user", userRoutes);

  server.use("/api", (error, req, res, next) => {
    res
      .status(500)
      .json({ title: "Server Error", message: "Some thing went wrong!!" });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jyxohlo.mongodb.net/${process.env.MONGO_DATABASE}`
    )
    .then(() => {
      server.listen(3000, (err) => {
        if (err) throw err;
        console.log("> Ready on http://localhost:3000");
      });
      console.log("Conected Database by MongoDB");
    });
});
