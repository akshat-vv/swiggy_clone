import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Location from "./components/Location";
import { Outlet, createBrowserRouter } from "react-router-dom";

const App = () => {
  console.log("HELLO");
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/swiggy_clone",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"",
        element:<Body/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <ContactUs/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      
    ],
  },
]);

export default App;
