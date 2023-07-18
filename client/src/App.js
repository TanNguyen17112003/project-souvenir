
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './FixedComponents/Header';
import Footer from './FixedComponents/Footer';
import Main from './pages/Main';
import Store from './pages/Store';
import Product from './pages/Product';
function App() {
  // let id;
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/menu' element={<Store />}></Route>
        <Route path='/items/:id' element={<Product />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
