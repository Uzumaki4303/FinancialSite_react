// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import FrontPage from './components/FrontPage';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Features from './components/Features';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <FrontPage/>
      <Features/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
