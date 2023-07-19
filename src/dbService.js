import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool1 = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.NAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD
});
pool1.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected to mysql database");
});
const pool = pool1.promise();

class dbService {
  async signup(data) {
    const query = "INSERT INTO user(username,email,password) VALUES(?,?,?)";
    const response = await pool.execute(query, [
      data.username,
      data.email,
      data.password,
    ]);
    console.log("RESPONSE:", response);
    return response;
  }
  async login(data) {
    const query = "SELECT * FROM user WHERE username=?;";
    const [rows, fields] = await pool.execute(query, [data.username]);
    console.log(rows);
    if (rows[0]?.password !== data.password)
      throw Error("Your password or username is wrong.");
    return data;
  }
  async getUser(username){
    const query = "SELECT * FROM user WHERE username=?;";
    const [rows, fields] = await pool.execute(query, [username]);
    return rows[0];
  }
}

export default dbService;
