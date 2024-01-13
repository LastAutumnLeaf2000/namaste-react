import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header
//  -Logo
//  -Nav items
// Body
//  -Search Bar
//  -card container
//   -restaurant card
// Footer

const AppLayout = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/restaurants/:id" element={<RestaurantMenu />} />
          {/* <Footer/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },
// ])

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //"render" method converts the object into HTML tag("h1") and puts it inside the "root id" inside the html file and replaces any file already present inside the "root div" in html file
