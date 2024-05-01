import React, { useState } from 'react';
import { Input } from './Form/Input';
import { Select } from './Form/Select';
import { Radio } from './Form/Radio';

export const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] =useState('')
  const [cor, setCor] = useState('')
  const [frutas, setFrutas] = useState('')

  return (
    <div>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} required/>
      <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto}/>
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor}/>
      <h2>Frutas</h2>
      <Radio options={['Maçã', 'Uva', 'Morango']} value={frutas} setValue={setFrutas}/>
    </div>
  );
};
