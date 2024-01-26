// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import Feature from './components/Feature';
import Strategy from './components/Strategy';
import Review from './components/Review';
// import Offer from './components/Offer';
// import AboutUs from './components/AboutUs';
// import RegisterForm from './components/Register_form';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <FrontPage/>
      <Feature/>
      <Strategy/>
      <Review/>
      {/* <Offer/> */}
      {/* <AboutUs/> */}
      {/* <RegisterForm/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
