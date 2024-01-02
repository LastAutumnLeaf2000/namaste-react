import React from "react"
import ReactDOM from "react-dom/client"

// const element = React.createElement("tag",{attributes},children)  //IMPORTANT



// const heading = React.createElement( //creating an "object"
//   "h1",
//   { id: "heading" }, //used to give attributes to our h1 tag
//   "Hello World from React!"
// );

// console.log(heading); //is an object

const parent = React.createElement( //it is creating an "object"
  "div",{ id: "parent" },
  React.createElement("div",{ id: "child" },
    [React.createElement("h1", {}, "Nested Elements"), //Create siblings using "Array"
    React.createElement("h2", {}, "Sibling No.2")] //Array of children
  )
);

console.log(parent); //object till now until render() method comes into picture
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //"render" method converts the object into HTML tag("h1") and puts it inside the "root id" inside the html file and replaces any file already present inside the "root div" in html file
