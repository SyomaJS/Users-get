const sendResOK = require("../helpers/sendResOK");

function getAllUsers(users, res) {
  sendResOK(res);

  const resp = {
    status: 200,
    users: users,
  };
  res.end(JSON.stringify(resp));
}

module.exports = getAllUsers;
