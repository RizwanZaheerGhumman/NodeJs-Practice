const http = require("http");
const routes = require("./routes");
const server = http.createServer((req, res) => {
  routes.reqHandler(req, res);
});
server.listen(5000);
