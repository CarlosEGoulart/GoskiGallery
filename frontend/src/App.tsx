import Lobo from "./assets/Lobo.jpg"
import Patrick from "./assets/Patrick.jpg"
import Aviator from "./assets/Aviator.jpg"
import Deadpool from "./assets/Deadpool.jpg"

export default function App(){
  return(
    <div className="w-full min-h-screen bg-white">
      <header className="p-4">
      <nav className="flex justify-between items-center">
        <a href="/"><h1 className="text-2xl font-bold px-5">Goski</h1></a>
        <ul className="flex gap-10 font-bold text-xl px-5">
        <li><a href="/gallery">Galeria</a></li>
        <li><a href="/about">Sobre</a></li>
        <li><a href="/contact">Contatos</a></li>
        </ul>
      </nav>
      </header>

 <section className="flex justify-center items-center h-80 flex-col">
          <h2 className="text-2xl font-bold font-">Goski Gallery</h2>
          <div className="p-4 flex justify-between items-center min-h-6xl flex-col">
            <p className="xl font-bold font-stretch-110%">Uma galeria de arte. </p>
            <p className="xl font-bold">Temos o proposito de expor e promover a arte criada pelos nossos autores.</p>
            <p className="xl font-bold"> Sinta-se livre para contempla-las.</p>
          </div>
      </section>
      
      <section className="flex justify-center items-center"> 
        <div className="p-4 flex justify-between w-full min-h-">

          <div className="bg-black text-white w-96 min-h-100 flex justify-center items-center flex-col rounded-xl px-4 py-4 gap-2">
            <img className="w-80 min-h-80 rounded-xl" src={Lobo} alt="Lobo Sangrento"></img>
            <h2 className="font-bold text-2xl">Lobo</h2>
            <button className="bg-white text-black text-2l font-bold w-1/2 rounded-xl px-4 py-2">Visualizar</button>
          </div>
          
          <div className="bg-black text-white w-96 min-h-100 flex justify-center items-center flex-col rounded-xl px-4 py-4 gap-2">
            <img className="w-80 min-h-80 rounded-xl" src={Patrick} alt="Patrick"></img>
            <h2 className="font-bold text-2xl">Patrick Bateman</h2>
            <button className="bg-white text-black text-2l font-bold w-1/2 rounded-xl px-4 py-2">Visualizar</button>
          </div>

          <div className="bg-black text-white w-96 min-h-100 flex justify-center items-center flex-col rounded-xl px-4 py-4 gap-2">
            <img className="w-80 min-h-80 rounded-xl" src={Aviator} alt="Aviador"></img>
            <h2 className="font-bold text-2xl">Aviador</h2>
            <button className="bg-white text-black text-2l font-bold w-1/2 rounded-xl px-4 py-2">Visualizar</button>
          </div>

          <div className="bg-black text-white w-96 min-h-100 flex justify-center items-center flex-col rounded-xl px-4 py-4 gap-2">
            <img className="w-80 min-h-80 rounded-xl" src={Deadpool} alt="DeadPool"></img>
            <h2 className="font-bold text-2xl">Deadpool</h2>
            <button className="bg-white text-black text-2l font-bold w-1/2 rounded-xl px-4 py-2">Visualizar</button>
          </div>
        
        </div>
      </section>

      <section className="flex justify-center items-center h-screen">
        <div className="p-4 flex justify-between w-full min-h-6"></div>


      </section>

      <footer className="bg-black text-white align-middle p-4">
        <p>GoskiGallery©</p>
        <p>Todos os direitos reservados</p>
      </footer>





    </div>
  )
}