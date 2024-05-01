import React, { useState } from 'react';
import { Input } from './Form/Input';
import { Select } from './Form/Select';

export const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] =useState('')

  return (
    <div>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} required/>
      <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto}/>
    </div>
  );
};
