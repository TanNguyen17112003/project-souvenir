
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './FixedComponents/Header';
import Footer from './FixedComponents/Footer';
import Main from './pages/Main';
import Store from './userAuth/Store';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/menu' element={<Store />}>
            {/* <Route path='/product/:id'></Route> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
