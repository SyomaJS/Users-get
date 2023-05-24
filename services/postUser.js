const { v4 } = require("uuid");
const { getBodyData } = require("../helpers/getBodyData");
const sendResOK = require("../helpers/sendResOK");
async function postUser(users, res, req) {
  console.log("Functionga kirdi");
  const data = await getBodyData(req);
  const { name, age, email } = JSON.parse(data);

  const newUser = {
    id: v4(),
    name,
    age,
    email,
  };
  users.push(newUser);

  sendResOK(res);
  const resp = {
    status: "Added New user",
    newUser,
  };

  res.end(JSON.stringify(resp));
}

module.exports = postUser;
