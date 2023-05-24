console.clear();
// ________<main>________
const http = require("http");
const users = require("./models/users_model");
const { getBodyData } = require("./helpers/getBodyData");
const getAllUsers = require("./services/getAllUsers");
const postUser = require("./services/postUser");
const getUserById = require("./services/getUserById");
const deleteUserById = require("./services/deleteUserById");
const putUserById = require("./services/putUserById");

const PORT = 3010; 

// ________</main>________
const server = http.createServer(async (req, res) => {
  console.log(`Starting server on ${PORT}`);

  if (req.url == "/users" && req.method == "GET") {
    getAllUsers(users, res, req);
  } else if (req.url == "/users" && req.method == "POST") {
    console.log("Kirdi");
    postUser(users, res, req);
  } else if (req.url.match(/\/users\/\w+/) && req.method == "GET") {
    getUserById(users, res, req);
  } else if (req.url.match(/\/users\/\w+/) && req.method == "DELETE") {
    deleteUserById(users, res, req);
  } else if (req.url.match(/\/users\/\w+/) && req.method == "PUT") {
    putUserById(users, res, req);
  }

});

//! End - - - - - - - - - - - - - - - - - - - - - -

server.listen(PORT, () => {
  console.log(`Starting server on ${PORT}`);
});
