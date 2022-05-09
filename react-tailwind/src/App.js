
import './App.css';
import CarFe from './assets/Images/CarFe.jpg'
import letrasFe from './assets/Images/letrasFe.jpg'
import logoFe from './assets/Images/logoFe.jpg'


function App() {
  return (
    <div className="sm:w-screen h-screen flex  justify-center items-center">
        <div className="w-10/12 h-full flex flex-col justify-between items-center">
          <div className='contenedor-img'>
            <img src={logoFe} alt="" className="w-full h-5/6 object-contain"/>
          </div>
          <div className='w-full h-2/6 flex flex-col items-center border-b-8 '>
            <button className='botones'>About Us</button>
            <button className='botones'>Projects</button>
            <button className='botones'>Contact</button>
          </div>
          <div className='contenedor-img'>
            <img src={letrasFe} alt="" className="w-full h-5/6 object-contain"/>
          </div>
          <div className='contenedor-img'>
            <img src={CarFe} alt="" className="w-full h-5/6 object-contain"/>
          </div>
          <div className='w-full h-2/6 flex flex-col justify-center items-center'>
            <p className='text-3xl'>Santiago Rincon</p>
          </div>
        </div>

    </div>
    

  );
}

export default App;
