import './App.css'
import Experience from './components/Experience/Experience';
import { Intro } from './components/Intro/Intro';
import NavBar from "./components/NavBar/NavBar";
import { Portfolio } from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import { Works } from './components/Works/Works';
import Testimonials from './components/Testimonials/Testimonials.jsx'
import { Contact } from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import {themeContext} from './Context'
import { useContext } from 'react';
function App() {
const theme = useContext(themeContext)
const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background: darkMode? 'black' : '',
    color: darkMode? "white" : ''
  }}
    >
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
