
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PostDetailComponent from './components/PostDetailComponent';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NavBarComponent from './components/NavBarComponent';
import CreatePostComponent from './components/CreatePostComponent ';
import EditPostComponent from './components/EditPostComponent';

function App() {
  return (
    <> 
      <ToastContainer />
    
    <BrowserRouter>
    
        <NavBarComponent/>
        <Routes>
          <Route path='/PostDetailComponent' element={<PostDetailComponent />} />
          <Route path='/create' element={<CreatePostComponent />} />
          <Route path='/edit/:id' element={<EditPostComponent /> } />
        </Routes>
    
    </BrowserRouter>
   
   </>
  );
}

export default App;
