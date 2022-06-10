import db from "../config/db.js";
import * as bcrypt from "bcrypt";

export async function signUp(req, res) { 
        try {
            const { name, email, password } = req.body;
            const passwordHash = bcrypt.hashSync(password, 10);
            const result = await db.query(`
            SELECT *
            FROM users
            WHERE email=$1;
            `, [email]);

            if (result.rowCount > 0){
                return res.status(409).send("Já existe usuário registrado com esse nome. Escolha outro!");
            } 
        
            await db.query(`
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3);
            `, [name, email, passwordHash]);

            res.status(201);
        } catch (e) {
            console.log(e);
            res.status(500).send("Ocorreu um erro ao registrar o usuário!");
    }
}

 