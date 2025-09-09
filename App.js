import './App.scss';
import {Routes,Route} from 'react-router-dom';
// import Particles from "react-tsparticles";
// import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Projects from './containers/projects';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/navBar';
// import particles from './utils.js/particles';

function App() {

  // const handleInit= async (main)=>{
  //   console.log("tsparticles init called");
  //   await loadFull(main);
  // };

  return (
    <div className="App">
      {/* particles js */}
      {/* <div className='particles-container'>
      <Particles id='tsparticles' options={particles} init={handleInit}/>
      </div> */}
      {/* navbar */}
      <Navbar/>

      {/* main page content */}
      <div className='App__main-page-content'>
      <Routes> 
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} /> 
      </Routes>
      </div>

     
    </div>
  );
}

export default App;
