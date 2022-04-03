/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from "cors";
import indexRouter from './app/routes/index.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('It works');
});

app.use("/api", indexRouter)

app.use(function (req, res) {
  res.status(404).send("Route not found");
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

