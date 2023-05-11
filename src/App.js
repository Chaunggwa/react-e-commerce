import React, { Fragment} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop_context";
import { Footer } from "./components/footer";
function App() {
  return (
    <Fragment>
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
      </ShopContextProvider>
     
    </Fragment>
  );
}

export default App;
