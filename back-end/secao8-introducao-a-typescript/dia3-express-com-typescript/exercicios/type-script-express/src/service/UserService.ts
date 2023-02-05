import UserModel from "../model/UserModel";
import connection from "../model/connection";

export default class UserService {
    model: UserModel;
    constructor() {
        this.model = new UserModel(connection);
    }

    public async getAllUsersService () {
        return await this.model.getAllUsersModel();
    }
}