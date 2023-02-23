
import './App.css';
import Products from './component/api.jsx'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Navbar from './component/navbar';




function App() {
  return (
    <>
   <Navbar />
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Products /> } />
    <Route path='/:id' element = {<Products /> } />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
