import {Link} from 'react-router-dom';
import {useCart} from '../context/CartContext';

export default function ProductCard({producto}){
    const{addCart} =useCart();

    return(
        <div style={{border:'1px solid #ccc',padding:'15px', borderRadius: '8px', textAlign:'center', background: '#fff'}}>
            <img src={producto.image} alt={producto.title} style={{height:'120px', objectFit:'contain'}}/>
            <h3 style={{fontSize:'0.95rem', height:'40px', overflow:'hidden'}}>{producto.title}</h3>
            
            <p style={{fontWeight:'bold', color:'#2e7d32'}}>${producto.price}</p>
            <div style={{display:'flex', flexDirection:'column', gap:'8px', marginTop:'10px'}}>

                <button
                onClick={()=>addToCart(producto)}
                style={{padding:'8px', background:'#2e7d32', color: '#fff', border:'none', borderRadius:'4px', cursor:'pointer'}}>
                    Agregar al carrito de compras
                </button>
                <Link to={'/producto/${producto.id'}style={{color:'#1976d2', textDecoration:'none', fontSize: '0.9rem'}}>
                    Ver detalle
                </Link>
                </div>
                </div>
    );
}
