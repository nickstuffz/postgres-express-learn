exports.usernameGet = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("usernames logged");
};

exports.usernameCreateGet = (req, res) => {
  res.render("createUsername", {
    title: "Create Username",
  });
};
