const db = require("../db/queries");

async function usernameGet(req, res) {
  if (!(Object.keys(req.query).length === 0)) {
    const { search } = req.query;
    const matches = await db.searchUsername(search);
    console.log(matches);
    res.send("Search Result" + matches.map((user) => user.username).join(", "));
  } else {
    const usernames = await db.getAllUsernames();
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  }
}

function usernameCreateGet(req, res) {
  res.render("createUsername", {
    title: "Create Username",
  });
}

async function usernameCreatePost(req, res) {
  const { userName } = req.body;
  await db.insertUsername(userName);
  res.redirect("/");
}

module.exports = {
  usernameGet,
  usernameCreateGet,
  usernameCreatePost,
};
