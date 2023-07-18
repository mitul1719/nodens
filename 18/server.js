// const os = require("node:os");

// //there are three types of modules in nodejs : 1)built in module 2)local modules 3)third party modules

// //OS module gives us information about my current operating system

// // console.log(os.arch());
// // console.log(os.freemem());
// // console.log(os.totalmem());
// // console.log(os.networkInterfaces());
// // C:\Users\mitul\AppData\Local\Temp

// console.log(os.tmpdir());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.release());

const express = require("express");
const loginRoute = require("./routes/login.route");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello from server");
// });

// app.post("/", (req, res) => {
//   res.send("Hello from server pst");
// });

const validateLoginPayLoad = (req, res, next) => {
  if (req.body && req.body.email && req.body.password) {
    next();
  } else {
    res.status(400).json({ error: "Bad Request", code: 400 });
  }
};

app.use("/login", validateLoginPayLoad, loginRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
