import React, { useState } from 'react';

export const App = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [mensagem, setMensagem] = useState('')

  const [select, setSelect] = useState('')

  const [produto, setProduto] = useState('')

  const [response, setResponse] = useState(null)

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((response) => {
      setResponse(response)
    })
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleRadio({target}) {
    setProduto(target.value)
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

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        name="senha"
        type="password"
        value={form.senha}
        onChange={handleChange}
      />

      <label htmlFor="cep">CEP</label>
      <input
        id="cep"
        name="cep"
        type="text"
        value={form.cep}
        onChange={handleChange}
      />

      <label htmlFor="rua">Rua</label>
      <input
        id="rua"
        name="rua"
        type="text"
        value={form.rua}
        onChange={handleChange}
      />

      <label htmlFor="numero">Número</label>
      <input
        id="numero"
        name="numero"
        type="text"
        value={form.numero}
        onChange={handleChange}
      />

      <label htmlFor="bairro">Bairro</label>
      <input
        id="bairro"
        name="bairro"
        type="text"
        value={form.bairro}
        onChange={handleChange}
      />

      <label htmlFor="cidade">Cidade</label>
      <input
        id="cidade"
        name="cidade"
        type="text"
        value={form.cidade}
        onChange={handleChange}
      />

      <label htmlFor="estado">Estado</label>
      <input
        id="estado"
        name="estado"
        type="text"
        value={form.estado}
        onChange={handleChange}
      />

      <textarea 
        name="mensagem"
        id="mensagem"
        cols="30"
        rows="5"
        value={mensagem}
        onChange={({target}) => setMensagem(target.value)}>
      </textarea>

      <select name="select" id="select" value={select} onChange={({target}) => setSelect(target.value)}>
        <option value="" disabled>Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>

      <label>
        <input
          type="radio"
          name='produto'
          value="notebook"
          //checked={produto === 'notebook'}
          onChange={handleRadio}
        />Notebook
         <input
          type="radio"
          name='produto'
          value="smartphone"
          //checked={produto === 'smartphone'}
          onChange={handleRadio}
        />Smartphone
      </label>

      {response && response.ok && <p>Formulário Enviado</p> }
      <br />
      <br />
      <button>Enviar</button>
    </form>
  );
};
