import UserService from "../service/UserService";
import connection from "../model/connection";
import { Request, Response } from "express";

export default class UserController {
    service: UserService;

    constructor() {
        this.service = new UserService();
    }

    public getAllUsersController = async (req: Request, res: Response) => {
        const users = this.service.getAllUsersService();

        return res.status(200).json(users);
    }
}