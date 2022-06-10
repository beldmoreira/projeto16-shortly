import db from "../config/db.js";

export async function getUserId(req,res){
    try {
        const {id}=req.params
        
      if(===0){
        return res.sendStatus(404);
      }
      res.send([]);
      } catch (e) {
        console.log(e);
        res.status(500).send("Ocorreu um erro ao obter a/o clientes!");
      }
}
