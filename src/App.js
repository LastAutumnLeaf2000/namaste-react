import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shimmer from "./components/Shimmer";
// import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Cart from "./components/Cart";
//Lazy Loading
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

// Header
//  -Logo
//  -Nav items
// Body
//  -Search Bar
//  -card container
//   -restaurant card
// Footer

//React Context

const AppLayout = () => {
  const [user, setuser] = useState("Nilesh");
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        {/*state and setter functons can also be passed by using Provider */}
        <UserContext.Provider value={{ user, setuser }}>
          {/*rewrites the value of "UserContext" function inside "UserContext.js" file.. if we pass a string from here then it will rewrite the value of "UserContext" fnc to string and it will still work ...for all components inside "Provider"..it will take the value as a "string" 
        Basically the components inside Provider will take value from here! Any value you pass*/}
          <Header />

          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/restaurants/:id"
              element={
                <Suspense fallback={<Shimmer></Shimmer>}>
                  <RestaurantMenu />
                </Suspense>
              }
            />
            <Route path="/cart" element={<Cart/>}/>
            {/* <Footer/> */}
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </Provider>
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
