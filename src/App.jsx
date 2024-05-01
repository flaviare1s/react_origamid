import React, { useState } from 'react';
import { Input } from './Form/Input';

export const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} required/>
    </div>
  );
};
