import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './componenets/Navigation';
import  Navigation from './componenets/Navigation';
import '@fortawesome/fontawesome-free/css/all.css';
import  Banner from './componenets/Banner';
import Skills from './componenets/Skills';
// import image from './background.jpg';
import {LinkContainer} from 'react-router-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Project from './componenets/Project';
import ScrollToTop from './componenets/ScrollToTop';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';
import ParticleBackground from "./componenets/ParticleBackground";
import News from './componenets/News';






function App() {
  return (
   
    <div className="App">
      
      <Navigation />
      <Banner />
      <Skills />
     <Project />
     <Contact/>
     <News />
     {/* <ParticleBackground /> */}
     <Footer />
     
     

    </div>
    
   
    
  );
}

export default App;
