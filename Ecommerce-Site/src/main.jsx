import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/productcontex.jsx";
import { FilterContextProvider } from "./context/filter_context.jsx";
import { CartProvider } from "./context/cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");

const domainName = import.meta.env.VITE_REACT_APP_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;

const StrictModeApp = (
  <React.StrictMode>
    <Auth0Provider
      domain={domainName}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

createRoot(rootElement).render(StrictModeApp);
