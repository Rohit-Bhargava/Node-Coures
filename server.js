const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");
require('./utils/redis');



const nodemailer = require("nodemailer");


    var sender = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: "587",
        auth: {
            user: 'createpost56@gmail.com',
            pass: 'Create56@'
        }
        });
        
        var mailDetails = {
        from: "createpost56@gmail.com",
        to: "bhargava08rohit@gmail.com",
        subject: "Sending Email using Node.js",
        text: "NodeMailer successfully conneced our project!"
        };
        
        sender.sendMail(mailDetails, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully: "
                        + info.response);
        }
        })


  const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  };

  const onError = error => {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
  };

  const port = normalizePort(process.env.PORT || "3000");
  app.set("port", port);

  const server = http.createServer(app);
  server.on("error", onError);
  server.on("listening", onListening);
  server.listen(port);
