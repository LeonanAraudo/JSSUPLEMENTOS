import produto from "../../models/produto";
import sequelize from "../../config/database";

export default async function GetProdutos(req,res){
    if(req.method === "GET"){
        try{
            const reqProdutos = await produto.findAll()
            if(reqProdutos){
                res.status(200).json(reqProdutos)
            }else{
                res.status(401).json("produto não encotrado")
            }
        }catch(error){
            res.status(500).json({error: "erro ao buscar o produto"})
        }
    }
    else{
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Método ${req.method} não permitido`)
    }
}