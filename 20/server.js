const { EventEmitter } = require("node:events");

const obj = require("./index");

obj.on("hello", () => {
  console.log("first");
});

module.exports = obj;
// const event = new EventEmitter();

// event.on("yash", () => {
//   console.log("hello from event yash");
// });
// event.on("shubhankar", () => {
//   console.log("hello from event sb");
// });

// event.emit("yash");
// event.emit("shubhankar");

// class PrivateEmitter extends EventEmitter {
//   pushtoqueu() {
//     console.log("first");
//   }
// }

// const pem = new PrivateEmitter();

// pem.pushtoqueu();
