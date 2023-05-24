const sendResOK = require("../helpers/sendResOK");
const userNotFound = require("../helpers/userNotFound");

function getUserById(users, res, req) {
  const id = req.url.split("/")[2];

  const user = users.find((user) => user.id == id);
  sendResOK(res)

  if (!user) {
    userNotFound(res);
  }
  const resp = {
    status: 200,
    user: user,
  };
  res.end(JSON.stringify(resp));
}

module.exports = getUserById;
