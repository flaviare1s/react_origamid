import React, { useState } from 'react';

export const App = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({target}) {
    const {id, value} = target
    setForm({ ...form, [id]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        value={form.nome}
        onChange={handleChange}
      />
      {form.nome}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        value={form.email}
        onChange={handleChange}
      />
      {form.email}
      <button>Enviar</button>
    </form>
  );
};
