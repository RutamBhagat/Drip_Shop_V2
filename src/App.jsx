import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/homeComponent";
import Navigation from "./routes/navigation/navigationComponent";
import ShopDisplay from "./routes/shop/shopDisplay.component";
import Signin from "./routes/authentication/signin.components";
import Register from "./routes/authentication/register.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import IndividualCategory from "./routes/shop/Cards/individualCategory.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} >
          <Route index element={<ShopDisplay />} />
          <Route path="womens" element={<IndividualCategory target={"womens"} />} />
          <Route path="mens" element={<IndividualCategory target={"mens"} />} />
          <Route path="hats" element={<IndividualCategory target={"hats"} />} />
          <Route path="suits" element={<IndividualCategory target={"suits"} />} />
          <Route path="jackets" element={<IndividualCategory target={"jackets"} />} />
          <Route path="sneakers" element={<IndividualCategory target={"sneakers"} />} />
        </Route>
        <Route path="authentication" element={<Authentication />}>
          <Route index element={<Signin />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
