import { createContext } from "react";

const UserContext = createContext({
  loggedUser: "Nilesh",
});

//If you want you can also just write "const UserContext = createContext()" without providing any value to the UserContext because App.js is modifying all the data passed to all the components
// console.log(UserContext)

export default UserContext;
