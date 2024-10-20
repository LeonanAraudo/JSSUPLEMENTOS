interface FormDataProps{
    Marca: string,
    Sabor: string,
    Peso_Produto: string,
    Quantidade: string
}
  
export async function useCreateForm2({
    Marca,
    Sabor,
    Peso_Produto,
    Quantidade
  }: FormDataProps) {
    await fetch('/api/cadProduto/cadProduto2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Marca,
        Sabor,
        Peso_Produto,
        Quantidade
      }),
    })
}