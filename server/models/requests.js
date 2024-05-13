import connection from "../database.js";

connection.connect((err, conn) => {
    if (err) {
        return Error(err);
    }

    console.log(conn);
});

class Request {
    constructor(master_name, time) {
        this.master_name = master_name,
        this.time = time
    }

    static async getAll() {
        const query = `select master.name as "master_name", status.name as "status", booking_datetime
        from request
        inner join status on id_status = is_status
        inner join master on id_master = is_master
        `;
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