import logo from './logo.svg';
import './App.css';
import PostComponent from './components/PostComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import CreatePostComponent from './components/CreatePostComponent ';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import EditPostComponent from './components/EditPostComponent';
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        
        <NavBarComponent />
        <Routes>
          <Route path='/PostDetailComponent' element={<PostComponent />} />
          <Route path="/create" element={<CreatePostComponent />} />
          <Route path='/edit/:id' element={ <EditPostComponent/>} />
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
