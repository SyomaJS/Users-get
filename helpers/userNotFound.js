function userNotFound(res) {
  res.writeHead(404, { "Content-Type": "application/json" });

  const resp = {
    status: 404,
    message: "User not found",
  };
  res.end(JSON.stringify(resp));
}

module.exports = userNotFound;
