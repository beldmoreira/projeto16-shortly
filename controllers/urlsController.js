import db from "../config/db.js";
import bcrypt from "bcrypt";

export async function publishUrlShort(req,res){
    try {
       
      res.send(customer[0]);
      } catch (e) {
        console.log(e);
        res.status(500).send("Ocorreu um erro ao obter a url!");
      }
}

export async function getUrlId(req,res){
    try {
       
      res.send(customer[0]);
      } catch (e) {
        console.log(e);
        res.status(500).send("Ocorreu um erro ao obter a url!");
      }
}

export async function getUrlShort(req,res){
    try {
       
      res.send(customer[0]);
      } catch (e) {
        console.log(e);
        res.status(500).send("Ocorreu um erro ao obter a url!");
      }
}

export async function deleteUrl(req,res){
    try {
       
      res.send(customer[0]);
      } catch (e) {
        console.log(e);
        res.status(500).send("Ocorreu um erro ao obter a/o clientes!");
      }
}
