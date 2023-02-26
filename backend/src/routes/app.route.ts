import { Router } from 'express';
import PatientRoute from './api/patient.route';
import UserRoute from './api/user.api';

class AppRoute {
  private app: Router; //////// co gia tri
  private path = '/api';

  constructor(app) {
    this.app = app;
    this.initializeRoutes();
  }

  // change .....

  private initializeRoutes() {
    this.app.use(this.path + '/patients', new PatientRoute().router);
    // this.app.use(this.path + '/user' /* ..... new UserRoute().router */);
    this.app.use(this.path, new UserRoute().router)
  }
}

export default AppRoute;
