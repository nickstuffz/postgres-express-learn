const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsername(query) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username LIKE ($1)",
    [`%+${query}+%`]
  );
  // not working check SQL not matching
  return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsername,
};
