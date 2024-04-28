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