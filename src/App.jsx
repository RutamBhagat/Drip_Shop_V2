import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/homeComponent";
import Navigation from "./routes/navigation/navigationComponent";
import ShopDisplay from "./routes/shop/shopDisplay.component";
import Signin from "./routes/authentication/signin.components";
import Register from "./routes/authentication/register.component";
import Hats from "./routes/shop/Cards/hats.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} >
          <Route index element={<ShopDisplay />} />
          <Route path="hats" element={<Hats />} />
        </Route>
        <Route path="authentication" element={<Authentication />}>
          <Route index element={<Signin />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
