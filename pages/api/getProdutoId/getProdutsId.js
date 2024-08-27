import produto from "../../../models/produto";
import sequelize from "../../../config/database";

export default async function GetProdutoID(){
     await sequelize.sync();
    if(req.method === GET){
        const {Produto_id} = req.query;        
        try{
            const pedeProduto = await produto.findByPk(Produto_id)
            if(pedeProduto){
                res.status(201).json(pedeProduto);
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