const sendResOK = require("../helpers/sendResOK");
const userNotFound = require("../helpers/userNotFound");

function deleteUserById(users, res, req) {
  const id = req.url.split("/")[2];

  let user = users.find((user) => user.id == id);
  if (!user) {
    userNotFound(res);
  } else {
    users.splice(user, 1);
    sendResOK(res);

    console.log("User deleted");
    const resp = {
      status: "DELETED",
      user: users,
    };

    res.end(JSON.stringify(resp));
  }
}

module.exports = deleteUserById;
