import produto from "../../../models/produto";
import sequelize from "../../../config/database";

export default async function handler(req, res) {
    if (req.method === 'POST') {
            const {              
                Marca,
                Sabor,
                Peso_Produto,
                Quantidade,
            } = req.body;

            try { 
                const createProduto = await produto.create({                        
                        Marca,
                        Sabor,
                        Peso_Produto,
                        Quantidade,
                    });

                    res.status(201).json(createProduto);
                

            } catch (error) {
                console.error('Error creating produto:', error);
                res.status(500).json({ error: 'Failed to create produto', details: error.message });
            }
        
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
