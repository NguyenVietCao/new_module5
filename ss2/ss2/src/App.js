import logo from './logo.svg';
import './App.css';
import Blog from './component/Blog';
import {posts} from './data/data'
import Form from './component/Form';

function App() {
  return (
   <>
   <Blog list= {posts}>

   </Blog>
      {/* <Form></Form> */}
   </>
  );
}

export default App;
