import { Router } from 'express';
import UserController from '../app/Controllers/UserController.js'


const routes = Router();

routes.get('/usuarios', UserController.index)
routes.get('/usuarios/:id', UserController.show)
routes.post('/usuarios', UserController.store)

export default routes;