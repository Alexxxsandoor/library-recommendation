import User from './User.js'


class UserService{
    async create(user){
        const existingUser = await User.findOne(user)
        if(existingUser) throw new Error("user login busy")
        const createdUser = await User.create({...user, admin: false})
        return createdUser 
    }
    async login(user){
        const findUser = await User.findOne({login: user.login})
        if(!findUser) throw new Error("user not found")
        if(findUser.password === user.password) return findUser
        else throw new Error("password false")
    }
    async getOne(id){
        if(!id)throw new Error("id false")
        const findUser = await User.findById(id)
        return {_id: findUser._id, login:findUser.login}
    }
}

export default new UserService()