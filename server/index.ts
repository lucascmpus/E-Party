import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const HOST_PORT = 3030;
const HOST_LOCAL = 'localhost';

const app = express();
const server = createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }
});

io.on('connection', socket => {
  console.log(`New socket id: ${socket.id} was connected`);

  socket.on('message', data => {
    console.log(data)
  })
})


server.listen(HOST_PORT, HOST_LOCAL, () => {
  console.log(`[ SERVER ] Server listening on port ${HOST_PORT}`);
  console.log(`[ SERVER ] Press CTRL+C to stop the server`);
});
