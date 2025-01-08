import mysql from "mysql2/promise";
import 'dotenv/config';


let connection;

async function connect() {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER, // Use `user` instead of `username`
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    console.log("Connection created with MySQL Successfully");
    return connection;
    
  } catch (error) {
    console.error("Error occured while connecting to MySQL", error);
    throw error;
  }
}



export { connect };
