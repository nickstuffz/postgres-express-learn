exports.usernameGet = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("usernames logged");
};

exports.usernameCreateGet = (req, res) => {
  res.render("createUsername", {
    title: "Create Username",
  });
};

exports.usernameCreatePost = (req, res) => {
  console.log("username to be saved: ", req.body.userName);
  res.send("username posted");
};
