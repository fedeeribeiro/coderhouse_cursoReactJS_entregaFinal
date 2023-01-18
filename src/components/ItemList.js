import Item from './Item';
import { Spinner } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

const ItemList = ({ items }) => {
    return (
        <>
            <MDBRow className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4'>
            {
                items.length > 0 ?
                items.map(item => (
                        <MDBCol>
                            <Item key={item.id} id={item.id} name={item.name} price={item.price} image={item.image}/>
                        </MDBCol>
                ))
                : <><div><Spinner animation="border" size="sm" /></div></>
            }
            </MDBRow>
        </>
    );
}

export default ItemList;