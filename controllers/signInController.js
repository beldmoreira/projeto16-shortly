import db from "../config/db.js";
import * as bcrypt from "bcrypt";


export async function signIn(req, res) { 
    try {
      const user = req.body;
      const result = await db.query(`
        SELECT *
        FROM users
        WHERE email=$1;
      `, [user.email]);

      if (result.rowCount !== 0 && bcrypt.compareSync(user.password, result.rows[0].password)) {
        const token = uuid();
        await db.query(`
            INSERT INTO sessions ("userId", token)
            VALUES ($1, $2);
        `, [result.rows[0].id, token]);
        return res.status(200).send(token);
    }
    res.status(404).send("Este usuário não foi encontrado");

    } catch (e) {
      console.log(e);
      res.status(500).send("Ocorreu um erro ao logar o usuário!");
    }
  }
