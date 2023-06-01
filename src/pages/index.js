import React, { useState } from 'react';
import Link from 'next/link'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const  handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica de envio do formulário
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', senha);

    // Limpar os campos e o estado de erro após o envio do formulário

    setName('');
    setEmail('');
    setSenha('');
    setConfirmaSenha('');

    // Realiza a requisição para a API
    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.status === "logado"){
          // TODO - cookie para o usuario
          window.location.href = "/geracupom";
        }else{
          // mostrar erro
        }
      });

  };

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gradient-to-b from-cyan-900 to-gray-800">
      {error && (
        <div className="rounded-md bg-green-50 p-4 text-sm text-green-500 mt-10 mb-10">
          <b>Sucesso:</b> Usuário cadastrado com sucesso!
          <button
            className="ml-2 text-blue-500 hover:text-blue-700 font-bold"
            onClick={handleCloseSuccess}
          >
            Fechar
          </button>
        </div>
      )}
      <div className="max-w-md w-full px-6 py-8 bg-gradient-to-b from-cyan-900 to-gray-800 border-2 border-blue-500">
        <h2 className="text-2xl font-bold mb-4">Faça seu login</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
              Login
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2  focus:ring-blue-500"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="senha">
              Senha
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2  focus:ring-blue-500"
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="flex justify-center space-x-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {/* <Link href="/geracupom">Entrar</Link> */}
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Form;