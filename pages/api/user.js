import sequelize from '../../config/database';
import usuario from '../../models/usuario';

export default async function handler(req, res) {
  await sequelize.sync();

   if (req.method === 'POST') {
    const { Nome, Telefone, Senha } = req.body;
    try {
      const Tipo_User = "Usuario"
      const user = await usuario.create({ Tipo_User, Nome, Telefone, Senha });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    // res.status(405).end(Method ${req.method} Not Allowed);
  }
}