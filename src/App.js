// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Offer from './components/Offer';
import Review from './components/Review';
import FrontPage from './components/FrontPage';
import AboutUs from './components/AboutUs';
import Feature from './components/Feature';
import Strategy from './components/Strategy';
import RegisterForm from './components/Register_form';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <FrontPage/>
      <Feature/>
      <Strategy/>
      <Review/>
      <Offer/>
      <AboutUs/>
      <RegisterForm/>
      <Footer/>
    </div>
  );
}

export default App;
