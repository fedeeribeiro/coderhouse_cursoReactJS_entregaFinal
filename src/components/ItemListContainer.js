import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        if(categoryId){
            customFetch(2000, products.filter(item => item.category.id === parseInt(categoryId)))
                .then(result => setData(result))
                .catch(err => console.log(err))
        } else {
            customFetch(2000, products)
                .then(result => setData(result))
                .catch(err => console.log(err))
        }
    }, [categoryId]);

    return (
        <div className='item-list-container'>
            <ItemList items={data} />
        </div>
    );
}

export default ItemListContainer;