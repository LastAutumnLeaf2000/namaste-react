import React from "react";
import ReactDOM from "react-dom/client";
import { AllData } from "./Menu";

// Header
//  -Logo
//  -Nav items
// Body
//  -Search Bar
//  -card container
//   -restaurant card
// Footer

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://assets.materialup.com/uploads/48bcfff3-16f2-48fb-b022-1216add0c1ca/preview.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>
            <i className="fa-solid fa-cart-plus" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const Card=({resdata})=>{
const {name,rating,costText,image,o2FeaturedImage,cuisine} = resdata?.info
console.log(resdata)
  return(
    <div className="card">
      <img className="res-logo" src={image.url} alt={o2FeaturedImage.url} />
      <h3>{name}</h3>
      <h4>{rating.rating_text} <i class="fa-solid fa-star"></i></h4>
      {/* <h4>{cuisine.map((cuisine)=>cuisine?.name)}</h4> */}{/*OR */}
      <h4>{cuisine[0].name}</h4>
      <h4>{costText.text}</h4>
    </div>
  )
}

const Body=()=>{
  return (
    <div className="body">
       <h3>Search</h3>
       <div className="card-container">
        {
          AllData.map((restaurant)=>(<Card key={restaurant.info.resId} resdata={restaurant}/>))
        }
       </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //"render" method converts the object into HTML tag("h1") and puts it inside the "root id" inside the html file and replaces any file already present inside the "root div" in html file
