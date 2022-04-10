import mysql from "mysql";

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

const connect = () => {
    connection.connect((err:any) => {
        if (err) {
            console.log('false connect to database');
            console.log(err);
            process.exit(1);
        } else {
            console.log('Successfully connect to database');
        }
    });
}

export {
    connect,
    connection
}