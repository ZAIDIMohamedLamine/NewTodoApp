import express from "express";
import cors from "cors";
const server = express();
server.use(express.json());
server.use(cors());
server.post("/api/login", (req, res) => {
  console.log(req.body);
  res.status(201).send({ accessToken: "123", user: { username: "Amine" } });
});

server.listen(3001, () => {
  console.log("server is listining on port 3001");
});
