import React, { useState } from 'react';

function Celular() {
  const [celulares, setCelulares] = useState([]);
  const [novoNumero, setNovoNumero] = useState('');
  const [numeroEditando, setNumeroEditando] = useState(null);
  const [mostrarMensagemDuplicada, setMostrarMensagemDuplicada] = useState(false);


  const adicionarNumero = () => {
    if (novoNumero.trim() === '' || celulares.includes(novoNumero)) {
        setMostrarMensagemDuplicada(true);
      return;
    }
    setCelulares([...celulares, novoNumero]);
    setNovoNumero('');
    setMostrarMensagemDuplicada(false);
  };

  const editarNumero = (index) => {
    setNumeroEditando(index);
    setNovoNumero(celulares[index]);
  };

  const salvarEdicao = () => {
    if (novoNumero.trim() === '') {
      return;
    }
    const novosCelulares = [...celulares];
    novosCelulares[numeroEditando] = novoNumero;
    setCelulares(novosCelulares);
    setNumeroEditando(null);
    setNovoNumero('');
  };

  const excluirNumero = (index) => {
    const novosCelulares = [...celulares];
    novosCelulares.splice(index, 1);
    setCelulares(novosCelulares);
  };
  

  return (
    <div>
      <h1>Cadastro de Números de Celular</h1>
      <input
        type="text"
        placeholder="Novo Número de Celular"
        value={novoNumero}
        onChange={(e) => setNovoNumero(e.target.value)}
      />
      <button onClick={adicionarNumero}>Adicionar</button>
      {mostrarMensagemDuplicada && (
        <div style={{ color: 'red' }}>Número já está na lista.</div>
      )}
      <ul>
      {celulares.map((numero, index) => (
  <li key={index}>
    {numeroEditando === index ? (
      <div>
        <input
          type="text"
          value={novoNumero}
          onChange={(e) => setNovoNumero(e.target.value)}
        />
        <button onClick={salvarEdicao}>Salvar</button>
      </div>
    ) : (
      <div>
        {numero}
        <button onClick={() => editarNumero(index)}>Editar</button>
        <button onClick={() => excluirNumero(index)}>Excluir</button>
      </div>
    )}
  </li>
))}

      </ul>
    </div>
  );
}

export default Celular;
