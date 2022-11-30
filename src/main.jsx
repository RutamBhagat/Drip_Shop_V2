import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";
import { ZoomProvider } from "./contexts/zoom.context";
import "./index.css";
import { HiddenMenuProvider } from "./contexts/hiddenMenu.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <ZoomProvider>
              <HiddenMenuProvider>
                <App />
              </HiddenMenuProvider>
            </ZoomProvider>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);
