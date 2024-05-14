import connection from "../database.js";

class Request {
    constructor(master_name, time) {
        this.master_name = master_name,
        this.time = time
    }

    static async getAll() {
        const query = `select * from master;`;
        try {
            return new Promise((res, rej) => {
                connection.query(query, (err, result) => {
                    if (err) {
                        rej([]);
                        throw Error(err);
                    } else {
                        console.log(result);
                        res(result);
                    }
                })
            })
        } catch (error) {
            Error(error)
            return [];
        }
    }
}


export default Request;