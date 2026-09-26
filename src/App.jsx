import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

import Layout from "./Layout";
import RequireAuth from "./auth/RequireAuth";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const DishDetail = lazy(() => import("./DishDetails"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Cart = lazy(() => import("./pages/Cart"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <p>Loading Addis Eats...</p>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Home />
                </Suspense>
              }
            />

            <Route
              path="menu"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Menu />
                </Suspense>
              }
            />

            <Route
              path="menu/:id"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <DishDetail />
                </Suspense>
              }
            />

            <Route
              path="favorites"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Favorites />
                </Suspense>
              }
            />

            <Route
              path="cart"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Cart />
                </Suspense>
              }
            />

            <Route
              path="signin"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <SignIn />
                </Suspense>
              }
            />

            <Route
              path="checkout"
              element={
                <RequireAuth>
                  <Suspense fallback={<LoadingScreen />}>
                    <Checkout />
                  </Suspense>
                </RequireAuth>
              }
            />

            <Route
              path="*"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
