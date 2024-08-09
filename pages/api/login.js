import { NextResponse } from 'next/server';
import usuario from '../../models/usuario';

export async function POST(request) {
  try {
    const { Nome, Senha } = await request.json();

    const user = await usuario.findOne({ where: { Nome } });

    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    const isPasswordCorrect = Senha === user.Senha;

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
    }
    
    return NextResponse.redirect('/telas/principalUser');
  } catch (error) {
    console.error('Erro no login:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
