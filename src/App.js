import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MaybeShowNavBar from "./components/Maybeshownavbar";
import { ShopContextProvider } from "./context/shop-context";
import { useState } from "react";
import OfferForm from "./pages/OfferForm";
import ProductsSummary from "./pages/ProductsSummary";
import Shop from "./pages/shop/shop";

function App() {
  const [offerDetails, setOfferDetails] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);


  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <MaybeShowNavBar>
            <Navbar />
          </MaybeShowNavBar>

          <Routes>
            <Route path="/" element={<OfferForm setOfferDetails={setOfferDetails} />} />
            <Route path="/shop" element={<Shop setSelectedProducts={setSelectedProducts} />} />
            <Route path="/summary" element={<ProductsSummary offerDetails={offerDetails} selectedProducts={selectedProducts} />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;