import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

const Item = ({ id, name, price, image }) => {
    return (
        <MDBCard className='h-100'>
            <MDBCardImage position='top' src={image} />
            <MDBCardBody>
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBCardText>
                    ${price}
                </MDBCardText>
                <MDBBtn color="dark">
                    <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: '#fff' }}>
                        Ver producto
                    </Link>
                </MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}

export default Item;