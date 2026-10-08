export default function FiltroPrecio({precioMax, setPrecioMax}){
    return(
        <div style={{marginBottom:'20px', padding:'12px', background: '#f0f0f0', borderRadius: '8px'}}>
            <label style={{fontWeight:'bold'}}>
                Filtrar por precio Máximo:${precioMax})
            </label>

            <input
            type="range"
            min="10000"
            max="50000"
            step="1000"
            value={precioMax}
            onChange={(e)=> setPrecioMax(Number(e.target.value))}
            style={{width:'100%', marginTop:'8px'}}
            />

            </div>
    );
}