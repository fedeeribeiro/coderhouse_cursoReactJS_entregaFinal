import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllFromFirestore, fetchCategoryFromFirestore } from '../utils/fetchDataFromFirestore';

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        if(categoryId){
            fetchCategoryFromFirestore(categoryId)
            .then(result => setData(result))
            .catch(error => console.log(error))
        }
        else{
            fetchAllFromFirestore()
            .then(result => setData(result))
            .catch(error => console.log(error))
        }
    }, [categoryId]);

    useEffect(() => {
        return (() => {
            setData([]);
        })
    }, []);

    return (
        <div className='item-list-container' style={{backgroundColor: '#eee'}}>
            <ItemList items={data} />
        </div>
    );
}

export default ItemListContainer;