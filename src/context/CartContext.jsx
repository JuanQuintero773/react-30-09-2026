import{useState, useEffect, createContext, useContext} from 'react';

const CartContext = createContext();

export function CartProvider({card}){
    const[cart, setCart]= useState(()=>{
        const saved =localStorage.getItem('carrito');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart));
    },[cart]);

    const addToCard=(product) =>{
        setCart((prevCart) => {
            const exists=prevCart.find((item) => item.id == product.id);

            if(exists){
                return prevCart.map((item) =>
                item.id === product.id ? {...item, cantidad: item.cantidad +1}: item);
            }
            return[...prevCart, {...product, cantidad: 1}];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev)=> prev.filter((item)=>item.id !==id));

        const clearCart =()=> setCart([]);
        const totalItems = card.reduce((acc, item)=> acc + item.cantidad, 0);
        const totalPrice = card.reduce((acc, item)=> acc + item.price * item.cantidad, 0);

        return(
            <CartContext.Provider value ={{cart, addToCard, removeFromCart, clearCart, totalItems, totalPrice}}>
                {card}
            </CartContext.Provider>
        );

    }
}
export const useCart =() => useContext(CartContext);