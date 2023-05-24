const { clearScreenDown } = require("readline");
const { getBodyData } = require("../helpers/getBodyData");
const userNotFound = require("../helpers/userNotFound");
const sendResOK = require("../helpers/sendResOK");
async function putUserById(users, res, req) {
  const id = req.url.split("/")[2];
  const body = await getBodyData(req);
  const { name, email, age } = JSON.parse(body);
  const userIndex = users.findIndex((user) => user.id == id);
  console.log("Id", id);
  console.log("Email", email, "Age", age, "Name", name);
  if (userIndex === -1) {
    userNotFound(res);
  } else {
    const updatedUser = {
      id: id,
      name,
      email,
      age,
    };
    console.log("Updated", updatedUser);
    users[userIndex] = updatedUser;
    sendResOK(res);

    const resp = {
      status: "UPDATED",
      user: updatedUser,
    };
    console.log(users);
    res.end(JSON.stringify(resp));
  }
}

module.exports = putUserById;
