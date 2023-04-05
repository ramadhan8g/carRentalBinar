import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import SearchResult from "./pages/SearchResult/SearchResult";
import Detail from "./pages/Detail/Detail";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
  {
    path: "/searchresult",
    element: <SearchResult/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
