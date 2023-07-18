module.exports.login = async (req, res) => {
  console.log("Reached controller successfully");

  console.log(req.params);
  console.log(req.query);

  res.send("Reached controller successfully");
};
