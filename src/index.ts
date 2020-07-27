import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import methodOverride from "method-override"
import "../controllers/oneroute"; 
//import { RegisterRoutes } from './router/routes';

const app = express()
app.use(cors())
app.use(bodyParser.json({limit: "2mb"}))
app.use(methodOverride())
dotenv.config()
//RegisterRoutes(app);

app.use((
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const status = err.status || 500;
  const body: any = {
    fields: err.fields || undefined,
    message: err.message || 'An error occurred during the request.',
    name: err.name,
    status : status,
  };

  res.status(status).json(body);
});

const port = 80 || 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});