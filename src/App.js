import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header/Header-comp";
import BodyComp from "./components/Body/Body-comp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About-comp";
import Contact from "./components/Contact/Contact-comp";
import Error from "./components/Error/Error-comp";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <HeaderComp />
      <BodyComp />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // replace any content inside the root
