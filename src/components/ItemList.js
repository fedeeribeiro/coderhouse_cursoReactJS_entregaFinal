import Item from "./Item";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Spinner } from "react-bootstrap";

const ItemList = ({ items }) => {
    return (
        <div>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {
            items.length > 0 ?
            items.map(item => (
                    <Col>
                        <Item key={item.id} id={item.id} name={item.name} price={item.price} image={item.image}/>
                    </Col>
            ))
            : <><div><Spinner animation="border" size="sm" /></div><p>Cargando...</p></>
        }
        </Row>
        </div>
    );
}

export default ItemList;