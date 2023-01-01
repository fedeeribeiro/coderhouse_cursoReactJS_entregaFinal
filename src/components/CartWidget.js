import { MDBBadge, MDBIcon } from 'mdb-react-ui-kit';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const context = useContext(CartContext);
  
  return (
    <>
      <Link to={`/cart`} style={{fontSize: 12, textDecoration: 'none', color: '#fff' }}>
        <span>
          <MDBIcon fas icon='shopping-cart' size='lg' />
            {(context.productsQtyInCart() !== 0) &&
              <MDBBadge color='danger' notification pill>{context.productsQtyInCart()}</MDBBadge>
            }
        </span>
      </Link>
    </>
  )
}

export default CartWidget;