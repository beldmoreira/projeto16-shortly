import db from "../config/db.js";


export async function getRanking(req,res){
    try {
        const result = await db.query(`
        SELECT users.id, users.name, COUNT(urls.url) AS "linksCount", SUM(urls.views) AS "visitCount"
        FROM users
        JOIN urls ON urls."userId"= users.id
        GROUP BY users.id
        ORDER BY "visitCount" DESC LIMIT 10;
        `);
        if(result.rowCount===0){
        return res.sendStatus(404);
      }
      res.send(result.rows);
      } catch (e) {
        console.log(e);
        res.status(500).send("Ocorreu um erro ao obter o ranking!");
      }
}





