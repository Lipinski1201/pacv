import RootLayout from "./layout"
import logo from "./imagens/logo.png"
export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-cyan-900 to-gray-800">
      <h3 className='text-5xl font-bold'>Entre em sua conta</h3>
        <img src={logo} alt="logo.png" />      
      <a href=""></a>
      
      <div className=" text-white block text-white-700 text-sm font-bold mb-2">
        <form className="text-white-700 ">
          <div className="font-bold">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email"> 
              Email
            </label>
              <input
              type="text"
              name="email"
              id="email"
              placeholder="voce@email.com"
              />
          </div>
          <div className="font-bold">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="senha">
              Senha
            </label>
              <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
            />
          </div>
          </form>
      </div>
      <button className="p-4 rounded-3xl bg-blue-900 text-3xl font-bold   transition-all">Entrar</button>
      <div className="">

      </div>
    </main>
  )
}
