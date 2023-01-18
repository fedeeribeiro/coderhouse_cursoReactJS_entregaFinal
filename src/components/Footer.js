import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center text-white' style={{backgroundColor: '#333'}}>
            <MDBContainer className='p-4 pb-0' >
                <section className='mb-4'>
                    <p>
                        ¡Seguinos en Instagram!
                    </p>
                    <MDBBtn outline color='light' floating className='m-1' href='https://www.instagram.com/casadesorrentinos.antolini' target='_blank' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>
                </section>
            </MDBContainer>
            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: fedeeribeiro
                <MDBBtn outline color='light' floating className='m-1' href='https://www.linkedin.com/in/ribeirofedericoedgardo/' target='_blank' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn outline color='light' floating className='m-1' href='https://www.github.com/fedeeribeiro' target='_blank' role='button'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
            </div>
        </MDBFooter>
    )
}

export default Footer;