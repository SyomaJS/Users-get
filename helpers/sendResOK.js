function sendResOK(res) {
  res.writeHead(200, {
    "Content-Type": "application/json charset utf-8",
  });
}

module.exports = sendResOK;
