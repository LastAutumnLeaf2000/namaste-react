//whenever creating a file for the custom hook always give the name of the file same as the hook name and always write small "use" at the start coz react will understad this way that its a hook.

import { useEffect, useState } from "react";
import { MENU_URL, MENU_URL2 } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setresInfo] = useState(null);
  //fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const raw = await fetch(MENU_URL + id + MENU_URL2);
      const json = await raw.json();
      setresInfo(json);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(resInfo);

  return resInfo;
};

export default useRestaurantMenu;
