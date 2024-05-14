import connection from "../database.js";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


class User {
    constructor(username, password) {
        this.id = getRandomInt(1000);
        this.username = username,
        this.password = password
    }

    static async getAll() {
        const query = `select * from user;`;
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


    async save() {
		const query = `INSERT INTO user (id_role, login, password, full_name, phone) VALUES (1, '${this.username}', '${this.password}', 'Lalala', '93928243')`;

		try {
			return new Promise((res, rej) => {
				connection.query(query, (err) => {
					if (err) {
						rej(err);
					} else {
						res();
					}
				});
			});
		} catch (error) {
			console.error(`Ошибка при сохранении пользователя: ${error}`);
		}
	}
}


export default User;