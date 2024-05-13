import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123123123",
    database: "demo-exam-v4"
});


export default connection;