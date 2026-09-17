import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmptyPage from "./pages/EmptyPage";
import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DishDetail from "./DishDetails";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/CheckOut";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import RequireAuth from "./auth/RequireAuth";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="menu" element={<Menu />} />
              <Route path="menu/:id" element={<DishDetail />} />

              <Route path="favorites" element={<Favorites />} />
              <Route path="cart" element={<Cart />} />

              <Route path="signin" element={<SignIn />} />
              <Route
                path="checkout"
                element={
                  <RequireAuth>
                    <Checkout />
                  </RequireAuth>
                }
              />

              <Route path="signup" element={<EmptyPage />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="feedback" element={<EmptyPage />} />
              <Route path="terms" element={<EmptyPage />} />
              <Route path="privacy" element={<EmptyPage />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
