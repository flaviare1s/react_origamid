import React, { useState } from 'react';
import { GlobalStorage } from './GlobalContext';
import { Produto } from './Desafio userContext/Produto';
import { Limpar } from './Desafio userContext/Limpar';

export const App = () => {

  return (
    <div>
      <GlobalStorage>
        <Produto/>
        <Limpar />
      </GlobalStorage>
    </div>
  );
};
