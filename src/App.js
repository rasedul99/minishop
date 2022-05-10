import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductComponent from "./components/ProductComponent";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/productcomponent" element={<ProductComponent />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        {/* <Route path="#" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
