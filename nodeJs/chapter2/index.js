const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server started");
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello</h1>");
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
