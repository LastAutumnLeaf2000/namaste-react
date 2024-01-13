import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "./utils/constants.js";
import { MENU_URL2 } from "./utils/constants.js";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  // const params = useParams()
  // console.log(params) //params={Id:svfg}

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const raw = await fetch(MENU_URL + id + MENU_URL2);
    const json = await raw.json();

    console.log(json);
    setresInfo(json);
  };

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
        {/* <h2 style={{ marginBottom: "40px", textDecoration: "underline" }}>
          Menu List
        </h2> */}
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
