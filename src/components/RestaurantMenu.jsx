import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu.js";
import RestaurantCard from "./RestaurantCard.js";

const RestaurantMenu = () => {

  const [showIndex, setshowIndex] = useState(null)

  // const [resInfo, setresInfo] = useState(null);//Moved this to a new component

  // const params = useParams() // params={id : mio-amore-4-beliaghata}
  const { id } = useParams();
  console.log(id);

  const resInfo = useRestaurantMenu(id); //custom hook

  // useEffect(() => { //Moved this to a new component
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const raw = await fetch(MENU_URL + id + MENU_URL2);
  //   const json = await raw.json();
  //   setresInfo(json);};

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false){
    return <div className="heading font-bold flex justify-center mt-4 text-xl"><h1>Oops! Looks like you are Offline</h1></div>
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { cuisine_string, name } =
    resInfo?.page_data?.sections?.SECTION_BASIC_INFO;

  return (
    <div className="restaurant-info">
      <div className="heading text-center my-5">
        <h1 className="font-bold text-3xl mb-2">{name}</h1>
        <h3 className="font-semibold text-xl">{cuisine_string}</h3>
      </div>
      <div className="menu mt-20">
          {resInfo?.page_data?.order?.menuList?.menus.map((data, index) => (
            <RestaurantCard key={data.menu.id} 
            data={data} 
            showItem = {index== showIndex ? true : false}
            setshowIndex={()=>index!==showIndex?setshowIndex(index):setshowIndex(null)}
            />//on first click setshowIndex(index) so value of "showindex" becomes index so "showItem" becomes true and the Accordion opens that particular card.
            //on second click on same card setshowIndex(null) so showItem becomes false so the accordion closes.
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
