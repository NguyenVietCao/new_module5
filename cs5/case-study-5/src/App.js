
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContractList from './components/crud/contract/ContractList';
import ServiceList from './components/crud/ServiceFurama/ServiceList';
import CustomerList from './components/crud/Customer/CustomerList';
import CreateService from './components/crud/ServiceFurama/CreateService';
import CreateCustomer from './components/crud/Customer/CreateCustomer';
import EditService from './components/crud/ServiceFurama/EditService';
import EditCustomer from './components/crud/Customer/EditCustomer';
import ContractCreate from './components/crud/contract/ContractCreate';
import EditContract from './components/crud/contract/EditContract';


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>

        <Header></Header>
        <HeaderElement></HeaderElement>
        <Menu></Menu>
        <Home></Home>

        <Routes>

          {/* <Route path='/createService' element={<CrSv />} /> */}
          <Route path='/booking' element={<Booking></Booking>} />
          <Route path='/contractList' element={<ContractList />} />
          <Route path='/contract/new' element={<ContractCreate />} />
          <Route path='/contract/edit/:id' element={<EditContract/> } />
          {/* service */}
          <Route path='/serviceList' element={<ServiceList />} />
          <Route path='/service/new' element={<CreateService />} />
          <Route path='/service/edit/:id' element={<EditService />} />
          {/* customer */}
          <Route path='/customerList' element={<CustomerList />} />
          <Route path='/customer/new' element={<CreateCustomer />} />
          <Route path='/customer/edit/:id' element={<EditCustomer />} />
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

      </BrowserRouter>


    </>
  );
}

export default App;
