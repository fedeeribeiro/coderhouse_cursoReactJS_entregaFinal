import { BsFillCartFill } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const ctx = useContext(CartContext);
  
  return (
    <>
      <Link to={`/cart`} style={{ textDecoration: 'none', color: '#fff' }}>
        <span><BsFillCartFill />
          {(ctx.productsQtyInCart() !== 0) && <Badge bg="danger">{ctx.productsQtyInCart()}</Badge>}
        </span>
      </Link>
    </>
  )
}

export default CartWidget;