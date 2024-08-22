import produto from "../../models/produto";
import sequelize from "../../config/database";

export default async function handler(req,res){
    if(req.method === 'POST'){
        const { 
              Nome,
              Preco,
              Descricao,
              Marca,
              Sabor,
              Peso_Produto,
              Quantidade,
              Foto,
              Tipo_produto,
              Preco_Antes} = req.body;
            try{
                const createProduto = await produto.create({ 
                    Nome,
                    Preco,
                    Descricao,
                    Marca,
                    Sabor,
                    Peso_Produto,
                    Quantidade,
                    Foto,
                    Tipo_produto,
                    Preco_Antes});
      res.status(201).json(createProduto);
            } catch(error){
                res.status(500).json({ error: 'Failed to create produto' });
            }
    }else{
        res.setHeader('Allow', ['GET', 'POST']);
    }
}