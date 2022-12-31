import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        alert("Has agregado " + quantity + " items al carrito.");
        setItemCount(quantity);
        addToCart(item, quantity);
    }

    return (
        <>
        {
            item ?
            (
                <Card style={{ width: '50rem' }} className='card-item-detail'>
                    <Card.Img variant="top" src={item.image}/>
                    <Card.Body className='card-body-item-detail'>
                        <div>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                ${item.price}
                            </Card.Text>
                            {
                                itemCount === 0 ?
                                <ItemCount onAdd={onAdd} />
                                : <Link to='/cart' style={{textDecoration: "none"}}><button>Ir al carrito</button></Link>
                            }
                        </div>
                        <div>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            )
            : <><div><Spinner animation="border" size="sm" /></div><p>Cargando...</p></>
        }
        </>
    );
}

export default ItemDetail;