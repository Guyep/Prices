const express = require('express'); // import express
const app = express();
console.log(`Starting Nofar`);

// return the main page of the application (static)
app.get('/', function (req, res) {
  // The send_file() function sends data from the file associated
  // with the open file handle over the connection associated with the socket.
  // A pointer to a socket file descriptor.
  res.send('ok');
});

// starts a port and host
// making the localhost for the connections to listen to incoming requests from a client
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${process.env.PORT || port}/`);
});
