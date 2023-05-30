  import Link from 'next/link'

  export default function Home() {

    return (
    
      <div className="page-container ">
      <div className="flex bg-gradient-to-b from-cyan-900 to-gray-800 p-10 w-screen">
        <div className="container mx-auto flex items-center">
        <img src="/imagens/logo-sem-fundo.png" className="w-20 h-auto mr-5  " alt="Logo"/>
          <h1>Gerador de cupom </h1>
        </div>
        <button 
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <Link href="/cadastro">Novo usuário</Link>
              </button>
      
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-1 px-10 bg-gradient-to-b from-gray-800 to-cyan-900 h-screen">
          <h2>Esquerda</h2>
        </div>
        <div className="col-span-8 px-10 bg-slate-900 w-screen">
          <h2>conteudo do gerador de cupom</h2>
        </div>
      </div>
    </div>
      );
      
  }

