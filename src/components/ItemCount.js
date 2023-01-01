import { useState } from "react";
import {
    MDBBtn,
    MDBIcon,
    MDBInput,
} from "mdb-react-ui-kit";

const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(Math.min(count + 1, 100));
    };

    const decrease = () => {
        setCount(Math.max(count - 1, 1));
    };

    const onChange = e => {
        const digits = e.target.value.replace(/\D+/g, '');
        const currentValue = Number(digits);
        const newValue = Math.min(currentValue, 100);
        
        setCount(newValue || 1);
    };

    return(
        <div>
            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                <MDBBtn className="px-3 me-2" color='dark' disabled={count <= 1} onClick={decrease}>
                    <MDBIcon fas icon="minus" />
                </MDBBtn>
                <MDBInput value={count} min={0} max={100} type="number" label="Unidades" onChange={onChange} />
                <MDBBtn className="px-3 ms-2" color='dark' disabled={count >= 100} onClick={increase}>
                    <MDBIcon fas icon="plus" />
                </MDBBtn>
            </div>
            <div>
                <MDBBtn color='dark' onClick={() => {
                    onAdd(count)
                }} disabled={count <=0}>
                    Agregar al carrito
                </MDBBtn>
            </div>
        </div>
    );
};

export default ItemCount;