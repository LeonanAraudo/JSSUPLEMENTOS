import usuario from '../../models/usuario';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { Nome, Senha } = req.body;

      const user = await usuario.findOne({ where: { Nome } });

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      const isPasswordCorrect = Senha === user.Senha;

      if (!isPasswordCorrect) {
        return res.status(401).json({ error: 'Senha incorreta' });
      }

      return res.redirect('/telas/principalUser');
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} não permitido`);
  }
}
