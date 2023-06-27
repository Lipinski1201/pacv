import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

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
          className={`col-span-${showSidebar ? '11' : '12'} px-10 bg-gradient-to-b from-cyan-900 to-gray-800 w-screen`}
        >
          <h2>conteúdo do gerador de cupom</h2>
        </div>
      </div>
    </div>
  );
}
