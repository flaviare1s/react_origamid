import React, { useState } from 'react';
import { Input } from './Form/Input';

export const App = () => {
  const [cep, setCep] = useState('');
  const [erro, setErro] = useState(null)

  function validateCep(value) {
    if(value.length === 0) {
      setErro('Preencha um valor')
      return false
    } else if(!/^\d{5}-?\d{3}$/.test(value)) {
      setErro('Preencha um CEP válido')
      return false
    } else {
      setErro(null)
      return true
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(validateCep(cep)) {
      console.log('Enviou')
    } else {
      console.log('Não enviado')
    }
    
  }

  function handleChange({target}) {
    setCep(target.value)
    if(erro) validateCep(target.value)
  }

  function handleBlur({target}) {
    console.log(validateCep(target.value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="CEP"
        id="cep"
        placeholder="00000-000"
        onChange={handleChange}
        onBlur={handleBlur}
        value={cep}
      />
      {erro && <p>{erro}</p>}
      <button>Enviar</button>
    </form>
  );
};
