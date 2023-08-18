import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Features from './components/Features';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Blog from './components/Blog';
import Footer from './components/Footer';
import HeaderElement from './components/element/HeaderElement';
import MenuElement from './components/element/MenuElement';
import HomeElement from './components/element/HomeElement';
import Elements from './components/element/Elements';
import FooterElement from './components/element/FooterElement';

function App() {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Home></Home>
      <Features></Features>
      <Gallery></Gallery>
      <About></About>
      <Testimonials></Testimonials>
      <Booking></Booking>
      <Blog></Blog>
      <Footer></Footer>
      <HeaderElement></HeaderElement>
      <MenuElement></MenuElement>
      <HomeElement></HomeElement>
      <Elements></Elements>
      <FooterElement></FooterElement>
    </>
  );
}

export default App;
