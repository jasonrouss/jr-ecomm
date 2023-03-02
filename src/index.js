import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./error-page";

import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products/:productId",
    element: <ProductDetails />,    errorElement: <ErrorPage />,

  },

]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer autoClose={1000} position="top-center" theme="light" />

    <RouterProvider router={router} />
  </Provider>
);
