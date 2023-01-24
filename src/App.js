import React,{useState, useEffect} from 'react'
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {
  const [scrollHight, setScrollHight]= useState(0); //estado para guardar la posicion del scroll
  let handleScroll=()=>{                      //funcion para setear la posicion del scroll
    let posicion=window.pageYOffset;
    setScrollHight(posicion)
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[scrollHight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHight}/>
      <Cover/>
      <About/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
