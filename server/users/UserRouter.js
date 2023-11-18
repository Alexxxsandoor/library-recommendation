import { Router } from "express";
import UserController from "./UserController.js";

const userRouter = new Router()

userRouter.post('/users', UserController.create)
userRouter.get('/users/:login/:password', UserController.login)
// userRouter.get('/users/:id', UserController.getOne)

export default userRouter