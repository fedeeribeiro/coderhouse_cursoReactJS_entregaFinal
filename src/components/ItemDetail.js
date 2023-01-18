import { useContext, useState } from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBTypography
  } from 'mdb-react-ui-kit';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        alert('Añadiste ' + quantity + ' un. de este producto.');
        setItemCount(quantity);
        addToCart(item, quantity);
    }

    return (
        <>
        {
            item ?
            (
                <MDBCard style={{ maxWidth: '960px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage src={item.image} alt='...' fluid/>
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>{item.name}</MDBCardTitle>
                                <MDBCardText>
                                    {item.description}
                                </MDBCardText>
                                <MDBCardText>
                                    <MDBTypography tag='h6' className='mb-0'>
                                        ${item.price}
                                    </MDBTypography>
                                </MDBCardText>
                                <MDBCardText>
                                {
                                    itemCount === 0 ?
                                    <ItemCount onAdd={onAdd} stock={item.stock} />
                                    : <Link to='/cart' style={{textDecoration: 'none'}}>
                                        <MDBBtn color='dark'>Ir al carrito</MDBBtn>
                                    </Link>
                                }
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            )
            : <><div><Spinner animation='border' size='sm' /></div></>
        }
        </>
    );
}

export default ItemDetail;