import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Table } from "./pages/Table/table";
import { Login } from "./components/login";
import MaybeShowNavBar from "./components/Maybeshownavbar";
import { ShopContextProvider } from "./context/shop-context";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          
          <MaybeShowNavBar>
          <Navbar />
          </MaybeShowNavBar>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
