import React from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
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

  //   console.log(json);
  //   setresInfo(json);
  // };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false){
    return <div className="heading"><h1>Oops! Looks like you are Offline</h1></div>
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { cuisine_string, name } =
    resInfo?.page_data?.sections?.SECTION_BASIC_INFO;

  return (
    <div className="restaurant-info">
      <div className="heading">
        <h1>{name}</h1>
        <h3>{cuisine_string}</h3>
      </div>
      <div className="menu" style={{ marginTop: "20px" }}>
        <ol>
          {resInfo?.page_data?.order?.menuList?.menus.map((data) => (
            <div key={data.menu.id}>
              <h3>
                <li style={{ color: "red", textDecoration: "underline" }}>
                  {data.menu.name}
                </li>
              </h3>
              <ul>
                <div className="menu-container">
                  {data.menu.categories[0].category.items.map((menu) => (
                    <div className="menu-card" key={menu.item.id}>
                      <img src={menu.item.item_image_thumb_url} alt="" />
                      <h4>{menu.item.name}</h4>
                      <h6 style={{ marginTop: "15px" }}>{menu.item.desc}</h6>
                      <h5 style={{ marginTop: "15px" }}>
                        ₹ {menu.item.price || menu.item.max_price}
                      </h5>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RestaurantMenu;
