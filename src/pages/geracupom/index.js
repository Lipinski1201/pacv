export default function Home() {

  return (
	
    <>
    <div className="flex bg-gradient-to-b from-cyan-900 to-gray-800 p-10 w-screen">
      <div className="container mx-auto">
        <h1>Gerador de cupom </h1>
      </div>
    </div>
    <div className="grid grid-cols-12">
      <div className="col-span-1 px-10 bg-gradient-to-b from-cyan-900 to-gray-800 h-screen">
        <h2>Esquerda</h2>
      </div>
      <div className="col-span-8 px-10">
        <h2>conteudo do gerador de cupom</h2>
      </div>
    </div>
  </>
    );
    
}
