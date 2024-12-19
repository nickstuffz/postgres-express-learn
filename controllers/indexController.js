const db = require("../db/queries");

async function usernameGet(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function usernameCreateGet(req, res) {
  res.render("createUsername", {
    title: "Create Username",
  });
}

async function usernameCreatePost(req, res) {
  console.log(req.body);
  const { userName } = req.body;
  await db.insertUsername(userName);
  res.redirect("/");
}

module.exports = {
  usernameGet,
  usernameCreateGet,
  usernameCreatePost,
};
