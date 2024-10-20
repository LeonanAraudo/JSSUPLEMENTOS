import produto from "../../../models/produto";
import sequelize from "../../../config/database";
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
// Multer é um middleware do node.js que ajuda no gerenciamento de arquivos, no caso ele e normalmente 
//usado para processar requisições antes que cheguem no manipulador final. Usei o upload para armazenar o arquivo(como um buffer) no servidor ao inves de salvar antes que chegue ao cloudinary
import streamifier from 'streamifier'; // biblioteca que converte o tipo de imagem para stream

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ storage: multer.memoryStorage() }).single('Foto'); 

export const config = {
    api: {
        bodyParser: false, 
    },
};

export default function handler(req, res) {
    if (req.method === 'POST') {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Error processing file:', err);
                return res.status(500).json({ error: 'Error processing file' });
            }

            const { 
                Nome,
                Preco,
                Descricao,
                Tipo_produto,
                Preco_Antes 
            } = req.body;

            try {
                if (!req.file) {
                    return res.status(400).json({ error: 'No file uploaded' });
                }
                const uploadStream = cloudinary.uploader.upload_stream({
                    folder: 'produtos',
                }, async (error, result) => {
                    if (error) {
                        console.error('Error uploading to Cloudinary:', error);
                        return res.status(500).json({ error: 'Error uploading to Cloudinary', details: error.message });
                    }
                    const imageUrl = result.secure_url;

                    const createProduto = await produto.create({ 
                        Nome,
                        Preco,
                        Descricao,
                        Foto: imageUrl,
                        Tipo_produto,
                        Preco_Antes
                    });

                    res.status(201).json(createProduto);
                });

                streamifier.createReadStream(req.file.buffer).pipe(uploadStream); // aqui ele ta pegando o buffer transformando em  stream e mandando pro cloudnary
            } catch (error) {
                console.error('Error creating produto:', error);
                res.status(500).json({ error: 'Failed to create produto', details: error.message });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
