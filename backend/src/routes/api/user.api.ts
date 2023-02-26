import { Router } from 'express';
import userController from '../../controllers/user.controllers';
// const userController = require("../../controllers/user.controllers");
// const { verifyUser } = require('../../middlewares/verify');
class UserRoute {
    public router = Router();

    constructor() {
        this.initializeRoutes();
      }
    initializeRoutes() {
        const _userController = new userController()
        this.router.post('/auth/login', _userController.login);
        // this.router.post('/auth/autologin', _userController.autoLogin);
        // this.router.post('/auth/register', _userController.signup);
    }
}


export default UserRoute;