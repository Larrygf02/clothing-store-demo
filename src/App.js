import { Routes, Route } from "react-router-dom";
import CategoryPreview from "./components/category-preview/category-preview.component";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="shop" element={<Shop></Shop>}></Route>
        <Route path="shop/:category" element={<CategoryPreview />}></Route>
        <Route path="auth" element={<Authentication></Authentication>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
