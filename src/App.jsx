import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/homeComponent";
import Navigation from "./routes/navigation/navigationComponent";
import ShopOriginal from "./routes/shop/shopOriginalComponent";
import Signin from "./routes/authentication/signin.components";
import Register from "./routes/authentication/register.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopOriginal />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
