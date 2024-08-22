import produto from "../../models/produto";
import sequelize from "../../config/database";

export default async function handler(req,res){
    await sequelize.sync();
    if(req.method === 'POST'){
        const { 
              Nome,
              Preco,
              Descricao,
              Data_cad,
              Marca,
              Sabor,
              Peso_Produto,
              Quantidade,
              Foto,
              Tipo_produto,
              Preco_Antes} = req.body;
            try{
                const produto = await produto.create({ 
                    Nome,
                    Preco,
                    Descricao,
                    Data_cad,
                    Marca,
                    Sabor,
                    Peso_Produto,
                    Quantidade,
                    Foto,
                    Tipo_produto,
                    Preco_Antes});
      res.status(201).json(produto);
            } catch(error){
                res.status(500).json({ error: 'Failed to create produto' });
            }
    }else{
        res.setHeader('Allow', ['GET', 'POST']);
    }
}