import {Link} from 'react-router-dom';
import {useCart} from '.../context/CartContext';

export default function Navbar(){
    const {totalItems} =useCart();
    return(
        <nav style={{display :'flex', gap: '15px',padding: '15px', background: '#222', color:'#fff', alignItems:'center'}}>
            <Link to="/" style={{color:'#fff', textDecoration:'none'}}>Inicio</Link>
            <Link to="/catalogo" style={{color:'#fff', textDecoration:'none'}}>Catalogo</Link>
            <Link to="/checkout" style={{color:'#fff', textDecoration:'none'}}>Carrito({totalItems})</Link>
            <Link to="/login" style={{color:'#fff', textDecoration:'none'}}>Login</Link>
            </nav>
    );
}
