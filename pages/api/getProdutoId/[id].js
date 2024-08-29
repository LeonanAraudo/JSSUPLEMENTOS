import produto from "../../../models/produto";
import sequelize from "../../../config/database";

export default async function GETProdutoID(req,res){
    if(req.method === "GET"){
        const {id} = req.query;        
        try{
            const reqProduto = await produto.findByPk(id)  
            if(reqProduto){ 
                res.status(201).json(reqProduto);
            }else(
                res.status(401).json("Produto não encontrado")
            )
        }catch(error){
            res.status(500).json({ error: 'erro ao buscar o produto' });
        }
    }else{
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Método ${req.method} não permitido`)
    }  
}