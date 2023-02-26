import * as bodyParser from 'body-parser';
import * as express from 'express';
import AppRoute from './routes/app.route';
import * as mongoose from "mongoose";
import connect from './config/index';
import { json, urlencoded } from 'body-parser';
import * as dotenv from "dotenv";
import * as cors from "cors";
dotenv.config();
class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    new AppRoute(this.app);
    connect();
  }

  private config(): void {
    this.app.use(json());
    this.app.use(cors())
    this.app.use(urlencoded({extended: true}));
  }

}

const PORT = 4000;

new App().app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
