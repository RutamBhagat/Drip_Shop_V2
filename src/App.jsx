import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/homeComponent";
import Navigation from "./routes/navigation/navigationComponent";
import ShopDisplay from "./routes/shop/shopDisplay.component";
import Signin from "./routes/authentication/signin.components";
import Register from "./routes/authentication/register.component";
import Hats from "./routes/shop/Cards/hats.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Womens from './routes/shop/Cards/womens.component';
import Mens from './routes/shop/Cards/mens.component';
import Suits from './routes/shop/Cards/suits.component';
import Jackets from './routes/shop/Cards/jackets.component';
import Sneakers from './routes/shop/Cards/sneakers.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} >
          <Route index element={<ShopDisplay />} />
          <Route path="womens" element={<Womens />} />
          <Route path="mens" element={<Mens />} />
          <Route path="hats" element={<Hats />} />
          <Route path="suits" element={<Suits />} />
          <Route path="jackets" element={<Jackets />} />
          <Route path="sneakers" element={<Sneakers />} />
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
