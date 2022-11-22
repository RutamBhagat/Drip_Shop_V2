import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/homeComponent";
import Navigation from "./routes/navigation/navigationComponent";
import ShopSwiper from "./routes/shop/shopSwiper.component";
import Signin from "./routes/authentication/signin.components";
import Register from "./routes/authentication/register.component";
import ShopOriginal from "./routes/shop/Card/shopOriginal.component"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopSwiper />} />
        <Route path="innershop" element={<ShopOriginal />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
