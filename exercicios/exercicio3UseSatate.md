// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


//RESPOSTA App.jsx:

import React, { useState } from 'react';
import { ProductDetails } from './Desafio Produtos/ProductDetails';


export const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)

  async function handleClick(event) {
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }
  
  return (
    <div>
      <button style={{margin: '5rem'}} onClick={handleClick}>notebook</button>
      <button style={{margin: '5rem'}} onClick={handleClick}>smartphone</button>
      <button style={{margin: '5rem'}} onClick={handleClick}>tablet</button>
      {loading && <p>Carregando...</p>}
      {!loading && data && <ProductDetails data={data}/>}
    </div>
  );
};