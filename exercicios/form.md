EXEMPLO DO APP.JSX IMPORTANDO OS COMPONENTES DE FORM

import React, { useState } from 'react';
import { Input } from './Form/Input';
import { Select } from './Form/Select';
import { Radio } from './Form/Radio';
import { Checkbox } from './Form/Checkbox';

export const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] =useState('')
  const [cor, setCor] = useState('')
  const [frutas, setFrutas] = useState('')
  const [linguagens, setLinguagens] = useState([])
  const [termos, setTermos] = useState([])
  if(termos.length > 0) {
    console.log('Enviar')
  }

  <!-- return (
    <div>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} required/>
      <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto}/>
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor}/>
      <h2>Frutas</h2>
      <Radio options={['Maçã', 'Uva', 'Morango']} value={frutas} setValue={setFrutas}/>
      <h2>Checkbox</h2>
      <Checkbox options={['JavaScript', 'PHP', 'Ruby']} value={linguagens} setValue={setLinguagens} />
      <h2>Checkbox Item Único</h2>
      <Checkbox options={['Li e aceito os termos']} value={termos} setValue={setTermos} />
    </div>
  );
}; -->
