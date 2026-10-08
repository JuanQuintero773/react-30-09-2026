import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Catalogo from './pages/Home';
import Detalle from './pages/Detalle';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import './App.css'

export default function App(){
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/producto/:id" element={<Detalle />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={
        <ProtectedRoute>
          <Checkout/>
        </ProtectedRoute>
       } />
       <Route path="+" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}
