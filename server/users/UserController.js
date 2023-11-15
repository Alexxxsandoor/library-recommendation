import UserService from "./UserService.js";

class UserController{
    async create(req,res){
        try {
            const user = await UserService.create(req.body)
            res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async login(req,res){
        try {
            const user = await UserService.login(req.body)
            res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req,res){
        try {
            const user = await UserService.getOne(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new UserController()