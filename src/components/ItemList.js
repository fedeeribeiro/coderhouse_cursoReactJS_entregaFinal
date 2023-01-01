import Item from "./Item";
import { Spinner } from "react-bootstrap";
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const ItemList = ({ items }) => {
    return (
        <div>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
            {
                items.length > 0 ?
                items.map(item => (
                        <MDBCol>
                            <Item key={item.id} id={item.id} name={item.name} price={item.price} image={item.image}/>
                        </MDBCol>
                ))
                : <><div><Spinner animation="border" size="sm" /></div><p>Cargando...</p></>
            }
            </MDBRow>
        </div>
    );
}

export default ItemList;