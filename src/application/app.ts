import express from 'express'
import cors from 'cors';
import { routes } from './routes';

class App {
    public app

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "Get, POST, PUT, DELETE");
      res.header("Access-Control-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-With")

      this.app.use(cors());
      next();
    })
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;