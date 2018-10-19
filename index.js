const http = require("http");
const url = require("url");

http
  .createServer(function(req, res) {
    const parsedUrl = url.parse(req.url);

    if (parsedUrl.pathname.replace(/^\/+|\/+$/g, "") === "hello") {
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          message: "Well, hello to you too! That is all I can say :)"
        })
      );
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(8080);
