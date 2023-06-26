import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  //variaveis do cupom
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [cargo, setCargo] = useState("");
  const [tipo, setTipo] = useState("");
  const [operacao, setOperacao] = useState("");
  const [valor, setValor] = useState(0);
  const [empresa, setEmpresa] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [data, setData] = useState("");

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/api/gerarcupom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        cpf,
        cargo,
        tipo,
        operacao,
        valor,
        empresa,
        cnpj,
        data,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      alert(data.link);
      // window.location = data.link;
    });
    
  }

  return (
    <div className="page-container">
      <div className="bg-gradient-to-b from-cyan-900 to-gray-800">
        <div className="flex p-10 w-screen justify-between">
          <div className="container mx-auto flex items-center">
            <button
              className="mr-3 bg-gradient-to-b from-cyan-900 to-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <img src="/imagens/logo-sem-fundo.png" className="w-20 h-auto mr-5" alt="Logo" />
            <h1>Gerador de cupom</h1>
          </div>
          <div>
            <button
              className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <Link href="/cadastro">Novo usuário</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        {showSidebar && (
          <div
            className="col-span-1 px-10 bg-gradient-to-b from-gray-800 to-cyan-900 h-screen"
          >
            <ul>
              <li>
                Nota Fiscal
              </li>
              <li>
                Histórico
              </li>
            </ul>

              
          </div>
        )}
        <div
          className={`col-span-${showSidebar ? '11' : '12'} px-10 bg-gradient-to-b from-cyan-900 to-gray-800 w-screen min-h-screen`}
        >
          <h2>conteúdo do gerador de cupom</h2>

          <form className='flex flex-col gap-4 text-black' onSubmit={handleSubmit}>
            <input name="nome" type="text" placeholder="Nome" value={nome}
              onChange={(e) => setNome(e.target.value)} required/>
            <input name="cpf" type="number" placeholder="CPF" value={cpf}
              onChange={(e) => setCPF(e.target.value)} required/>
            <select name='cargo' value={cargo}
              onChange={(e) => setCargo(e.target.value)} required>
              <option value="" selected>Selecione uma Opção</option>
              <option value="RECEPCIONISTA">RECEPCIONISTA</option>
              <option value="GERENCIA">GERENTE</option>
              <option value="COMERCIAL">COMERCIAL</option>
              <option value="T.I">T.I</option>
              <option value="R.H">R.H</option>
            </select>
            <select name='tipo' value={tipo}
              onChange={(e) => setTipo(e.target.value)} required>
              <option value="" selected>Selecione uma Opção</option>
              <option value="Empréstimo Financeiro">Empréstimo Financeiro</option>
              <option value="Adiantamento">Adiantamento</option>
              <option value="Vale">Vale</option>
            </select>
            <select name='operacao' value={operacao}
              onChange={(e) => setOperacao(e.target.value)} required>
              <option value="" selected>Selecione uma Opção</option>
              <option value="Pagamos">Pagamos</option>
            </select>
            <input type="number" name="valor" placeholder="Valor" id="valor" value={valor}
              onChange={(e) => setValor(e.target.value)} required/>
            <input type="text" name="empresa" value={empresa}
              onChange={(e) => setEmpresa(e.target.value)} required/>
            <input type="number" name="cnpj" value={cnpj}
              onChange={(e) => setCNPJ(e.target.value)} required/>
            <input type="date" name="data" id="data" value={data}
              onChange={(e) => setData(e.target.value)} required/>
            <button className='bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Gerar nota fiscal</button>
          </form>
        </div>
      </div>
    </div>
  );
}
