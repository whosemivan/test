import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: "localhost",
	user: "root",
	password: "123123123",
	database: "demo_ex_1",
});

connection.connect((err) => {
	if (err) {
		return console.error("Ошибка: " + err.message);
	} else {
		console.log("Подключение к серверу MySQL успешно установлено");
	}
});

export default connection;