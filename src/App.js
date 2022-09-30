import ItemListContainer from "./componente/Itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./componente/ItemDetailcontainer/ItemDetailContainer";
import NavBar from "./componente/Navbar/NavBar";
import Cart from './Cart/Cart';



import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {

  return (

<>
<BrowserRouter>

<NavBar />
 <Routes>
 <Route path="/" element={<ItemListContainer />} /> 
 <Route path='/categoria/:categoriaId' element={<ItemListContainer />} /> 
 <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
 <Route path="/cart" element={<Cart />} />
</Routes>

</BrowserRouter>
</>

  );
}

export default App; 
