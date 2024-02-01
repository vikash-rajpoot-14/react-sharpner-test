import { createContext, useState } from 'react';
import Data from './component/Data';
import Form from './component/Form';
import Header from './component/Header';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cart from './component/Cart';
export const context = createContext({
  cart : [],
  setCart: ()=>{}
})

function App() {
  const [cart, setCart] = useState([]);
  const [togglecart, setTogglecart] = useState(false);

  return (
  <BrowserRouter>
    <context.Provider value={{ cart, setCart ,togglecart,setTogglecart }}>
    <div className='bg-green-100 h-screen'>
      <Header />
      <Cart/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/store" element={<Data />} />
      </Routes>
    </div>
    </context.Provider>
  </BrowserRouter>
  )
}

export default App
