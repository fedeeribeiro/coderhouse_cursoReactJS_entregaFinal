import { useState } from "react";
import { Counter } from "./counter/Counter";

const ItemCount = ({ onAdd }) => {
    const [quantity, setQuantity] = useState(0);

    return(
        <div>
            <div>
                <Counter count={quantity} setCount={setQuantity}/>
                <button onClick={() => onAdd(quantity)} disabled={quantity <=0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;