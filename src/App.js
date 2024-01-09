import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
    <div className="app">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
};

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //"render" method converts the object into HTML tag("h1") and puts it inside the "root id" inside the html file and replaces any file already present inside the "root div" in html file
