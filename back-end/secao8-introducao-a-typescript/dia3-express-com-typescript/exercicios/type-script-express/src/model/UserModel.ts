import { Pool } from 'mysql2/promise';

export default class UserModel {
    connection: Pool

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async getAllUsersModel () {
        const query = 'SELECT * FROM Users';
        const [result] =await this.connection.execute(query);
        return result;
    }
}