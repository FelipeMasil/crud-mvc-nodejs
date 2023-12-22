import { Router } from 'express';
import UserController from '../app/Controllers/UserController.js'


const routes = Router();

/** Rotas de usuário */
routes.get('/usuarios', UserController.index)
routes.get('/usuarios/:id', UserController.show)
routes.post('/usuarios', UserController.store)
routes.put('/usuarios/update/:id', UserController.update)
routes.delete('/usuarios/delete/:id', UserController.delete)


export default routes;