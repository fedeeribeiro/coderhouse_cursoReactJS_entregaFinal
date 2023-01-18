import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneFromFirestore } from '../utils/fetchDataFromFirestore.js';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        fetchOneFromFirestore(productId)
        .then(result => setData(result))
        .catch(error => console.log(error))
    }, [productId]);
    
    return (
        <div className='item-detail-container' style={{backgroundColor: '#eee'}}>
            <ItemDetail item={data} />
        </div>
    );
}

export default ItemDetailContainer;