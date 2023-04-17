const User = require("../models/User");
const bcryptjs = require("bcryptjs");

exports.postCreateUser = (req, res, next) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((userResult) => {
      if (!userResult) {
        return bcryptjs.hash(password, 12);
      } else {
        res.status(409).json({
          message: "This email is exist!! Pls check again!!",
          title: "Email's exist!",
        });
      }
    })
    .then((hashedPassword) => {
      const newUser = new User({
        fullName: fullName,
        email: email,
        password: hashedPassword,
      });
      return newUser.save();
    })
    .then((result) => {
      console.log(result);
      res
        .status(201)
        .json({ message: "Create new user success!!", title: "Success" });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((userResult) => {
      if (!userResult) {
        res
          .status(422)
          .json({ title: "Unauthorized", message: "Email's not exist!" });
      } else {
        bcryptjs.compare(password, userResult.password).then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = userResult;
            req.session.save((err) => {
              if (err) {
                console.log(err);
              } else {
                res
                  .status(200)
                  .json({
                    title: "Success!",
                    message: "Login sucess!!",
                    user: userResult,
                  });
              }
            });
          } else {
            console.log("herer");
            res.status(422).json({
              title: "Value valid wrong",
              message: "Email or password is wrong, check again!",
            });
          }
        });
      }
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getSession = (req, res, next) => {
  res.status(200).json(req.session);
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.status(200).json({ title: "Success", message: "Logout success!!!" });
  });
};
