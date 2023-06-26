
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import NavBar from "./components/NavBar";
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Error404 from './components/Error404';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Checkout from './components/Checkout'
import CartContextProvider from './components/CartContext';
import OrderGenerated from './components/OrderGenerated'


function App() {
  return (
   
    <div >
     <CartContextProvider> 
   <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path='/categoria/:id' element ={<ItemListContainer/>}/>
      <Route path='/item/:id' element ={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orderBuy/:orderId" element={<OrderGenerated />} />
      <Route path='*'element ={<Error404/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
    
  );
}

export default App;
