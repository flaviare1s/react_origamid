import React from 'react'
import { Titulo } from './Titulo';
import { Produto } from './Produto';

export const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <div>
      <Titulo titulo='Produtos' />
      <div>
        {produtos.map((produto, index) => (
          <Produto key={index} produto={produto} />
        ))}
      </div>
    </div>
  )
}

