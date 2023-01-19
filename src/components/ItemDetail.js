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
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const addToCartAndNotify = (quantity) => {
        setItemCount(quantity);
        addToCart(item, quantity);
        if(quantity === 1){
            toast.success('Añadiste ' + quantity + ' unidad de ' + item.name + ' al carrito.', {theme: 'colored'})
        }else{
            toast.success('Añadiste ' + quantity + ' unidades de ' + item.name + ' al carrito.', {theme: 'colored'})
        }
    }

    return (
        <>
        {
            item ?
            <>
                <ToastContainer />
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
                                    <ItemCount onAdd={addToCartAndNotify} stock={item.stock} />
                                    : 
                                    <>
                                        <Link to='/cart' style={{textDecoration: 'none'}}>
                                            <MDBBtn color='dark'>Ir al carrito</MDBBtn>
                                        </Link>
                                    </>
                                }
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </>
            : <><div><Spinner animation='border' size='sm' /></div></>
        }
        </>
    );
}

export default ItemDetail;