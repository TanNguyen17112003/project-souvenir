

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Store from './pages/Store';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import News from './pages/News';
import Contact from './pages/Contact';

import {AuthProvider} from './context/AuthContext'
function App() {

  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Main />} />
            <Route path='/news' element={<News /> } />
            <Route path='/contact' element={<Contact />} />
            <Route path='/menu' element={<Store />} />
            <Route path='/items/:id' element={<Product />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
