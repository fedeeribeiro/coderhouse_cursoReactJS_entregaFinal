import { useContext } from 'react';
import { CartContext } from './CartContext';
import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from 'mdb-react-ui-kit';
import { ToastContainer } from 'react-toastify';

const Cart = () => {
    const { cartList, createOrder, deleteThis, deleteAll, orderTotalPrice } = useContext(CartContext);

    return (
        <section className='h-100' style={{ backgroundColor: '#eee' }}>
            <ToastContainer />
            <MDBContainer className='py-5 h-100'>
                <MDBRow className='justify-content-center align-items-center h-100'>
                    <MDBCol md='10'>
                        <div className='d-flex justify-content-between align-items-center mb-4'>
                            <MDBTypography tag='h3' className='mb-0 text-black'>
                                Carrito de compras 
                            </MDBTypography>
                            <div>
                                {
                                    (cartList.length !== 0) && <MDBBtn color='danger' onClick={() => deleteAll()}>Eliminar todo</MDBBtn>
                                }
                            </div>
                        </div>
                        {
                            cartList.length === 0 ? <p>Tu carrito está vacío.</p>
                            : cartList.map(item => (
                                <>
                                <MDBCard key={item.id} className='rounded-3 mb-4'>
                                    <MDBCardBody className='p-4'>
                                        <MDBRow className='justify-content-between align-items-center'>
                                            <MDBCol className='sm-cart-col' sm='2' md='2' lg='2' xl='2'>
                                                <MDBCardImage className='rounded-3 cart-product-img' fluid
                                                    src={item.img}
                                                    alt='product image'
                                                    />
                                            </MDBCol>
                                            <MDBCol className='sm-cart-col-product-name' sm='3' md='3' lg='3' xl='3'>
                                                <MDBTypography tag='h5' className='sm-cart-col-product-name cart-product-name mb-0'>
                                                    {item.name}
                                                </MDBTypography>
                                            </MDBCol>
                                            <MDBCol sm='2' md='2' lg='2' xl='2'
                                                className='sm-cart-col cart-product-units d-flex align-items-center justify-content-around'>
                                                <p className='sm-cart-col'>{item.qty} un. a ${item.unit_price}</p>
                                            </MDBCol>
                                            <MDBCol className='sm-cart-col' sm='2' md='2' lg='2' xl='2'>
                                                <MDBTypography tag='h5' className='sm-cart-col mb-0 cart-product-price'>
                                                    ${item.total_price}
                                                </MDBTypography>
                                            </MDBCol>
                                            <MDBCol sm='1' md='1' lg='1' xl='1' className='sm-cart-col-delete-btn text-end'>
                                                    <button className='sm-cart-col-delete-btn' onClick={() => deleteThis(item.id)} style={{border: 'none', backgroundColor: 'transparent'}}>
                                                        <MDBIcon fas icon='trash text-danger' size='lg' />
                                                    </button>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                                </>
                            ))
                        }
                        {
                            (cartList.length !== 0) && (
                                <>
                                    <MDBCard className='mb-5'>
                                        <MDBCardBody className="p-4">
                                            <div className="float-end">
                                            <p className="mb-0 me-5 d-flex justify-content-end">
                                                <span className="small text-muted me-2">Subtotal:</span>
                                                <MDBTypography tag="h6" className="mb-0">
                                                    ${orderTotalPrice()}
                                                </MDBTypography>
                                            </p>
                                            <p className="mb-0 me-5 d-flex justify-content-end">
                                                <span className="small text-muted me-2">Costo de envío:</span>
                                                <MDBTypography tag="h6" className="mb-0">
                                                    Gratis
                                                </MDBTypography>
                                            </p>
                                            <hr/>
                                            <p className="mb-0 me-5 d-flex justify-content-end">
                                                <span className="small text-muted me-2">Total:</span>
                                                <MDBTypography tag="h6" className="mb-0">
                                                    ${orderTotalPrice()}
                                                </MDBTypography>
                                            </p>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBCard className="rounded-3 mb-4">
                                        <MDBCardBody className="p-4">
                                            <MDBRow className="justify-content-between align-items-center">
                                                <MDBCol>
                                                    <MDBBtn color="success" block size="lg" onClick={createOrder}>
                                                        Comprar
                                                    </MDBBtn>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </>
                            )
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default Cart;