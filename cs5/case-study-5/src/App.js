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
import CrSv from './components/crud/ServiceFurama/CrSv';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/crud/Form';
import FormCreateService from './components/crud/FormCreateService';
import ContractList from './components/crud/contract/ContractList';
import ServiceList from './components/crud/ServiceFurama/ServiceList';
import CustomerList from './components/crud/Customer/CustomerList';

function App() {
  return (
    <BrowserRouter>
      
      <Header></Header>
      <HeaderElement></HeaderElement>
      <Menu></Menu>
      <Home></Home>

      <Routes>

        <Route path='/createService' element={<CrSv />} />
        <Route path='/booking' element={<Booking></Booking>} />
        <Route path='/contractList' element={<ContractList />} />
        <Route path='/serviceList' element={<ServiceList />} />
        <Route path='/customerList'element={<CustomerList/>}/>
      </Routes>

      <Features></Features>
      <Gallery></Gallery>
      <About></About>
      <Testimonials></Testimonials>
     
      <Blog></Blog>
      
      <MenuElement></MenuElement>
      <HomeElement></HomeElement>
      <Elements></Elements>
     
    
      {/* <FooterElement></FooterElement>  */}
      <Footer></Footer>
    <FormCreateService></FormCreateService>
    </BrowserRouter>

    // <CrSv/>
  );
}

export default App;
