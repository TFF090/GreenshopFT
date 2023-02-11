import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Cart from "./pages/Cart/Cart"
import { imag } from './Assets/Asset';
// import { t } from 'i18next'
// import { useTranslation } from "react-i18next"

function App() {

  // const { t, i18n } = useTranslation();
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <>
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/imag/:id" element={<Product imag={imag}/>}/>
     <Route path="/cart" element={<Cart />} />
   </Routes>
    </>
  );
}

export default App;
