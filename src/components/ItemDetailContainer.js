import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail.js";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        customFetch(1000, products.find(item => item.id === parseInt(productId)))
            .then(result => setData(result))
            .catch(err => console.log(err))
    });
    
    return (
        <div className="item-detail-container">
            <ItemDetail item={data} />
        </div>
    );
}

export default ItemDetailContainer;