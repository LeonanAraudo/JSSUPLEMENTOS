import usuario from '../../../models/usuario'

export default async function buscarClientes(req,res){
    if(req.method === "GET"){
        try{
            const reqAllUsers = await usuario.findAll()
            if(reqAllUsers){
                res.status(200).json(reqAllUsers)
            }else{
                res.status(401).json("usuário não encotrado")
            }
        }catch(error){
            res.status(500).json({error: "erro ao buscar o usuário"})
        }
    }
    else{
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Método ${req.method} não permitido`)
    }
}