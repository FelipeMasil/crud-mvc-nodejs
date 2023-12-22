

import UserRepository from '../Repositories/UserRepository.js';

class UserController {

    async index(req, res) {
        try {
            const result = await UserRepository.findAll()
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id;
            const result = await UserRepository.findById(id);
            res.json(result).status(200);
        } catch (error) {
            res.json(error)
        }
    }

    async store(req, res) {
        try {
            const { nome, email, idade } = req.body;
            await UserRepository.create(nome, email, idade)
            res.json({ message: 'Success' }).status(201)
        } catch (error) {

        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const { email, idade } = req.body
            await UserRepository.update(id, email, idade)
            res.json({ message: 'Success' })
        } catch (error) {
            res.status(204)
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await UserRepository.delete(id);
            res.json({ message: 'Deleted' });
        } catch (error) {
            res.json(error)
        }
    }
}

export default new UserController();