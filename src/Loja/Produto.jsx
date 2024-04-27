import React from 'react'

export const Produto = ({produto, index}) => {
  return (
    <div style={{border: '1px solid', margin: '1rem 0', padding: '1rem'}}>
         <div key={index}>
            <h2>{produto.nome}</h2>
            <ul>
              {produto.propriedades.map((propriedade, propIndex) => (
                <li key={propIndex}>{propriedade}</li>
              ))}
            </ul>
          </div>
    </div>
  )
}

