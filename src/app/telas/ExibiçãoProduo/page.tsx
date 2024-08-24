"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Produto {
  Produto_id: string;
  nome: string;
  descricao: string;
  preco: number;
}

interface ProdutoProps {
  Produto_id: string;
}

export default function ProdutoComponent({ Produto_id }: ProdutoProps) {
  const [produto, setProduto] = useState<Produto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get<Produto>(`/api/cadProduto/${Produto_id}`);
        setProduto(response.data);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Erro ao buscar produto');
      }
    };

    fetchProduto();
  }, [Produto_id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!produto) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>Preço: R${produto.preco.toFixed(2)}</p>
    </div>
  );
}
