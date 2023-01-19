import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar /> 
                    <Routes>    
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route path='/item/:productId' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </>
  );
}

export default App;