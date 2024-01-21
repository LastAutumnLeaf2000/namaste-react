import { AllData } from "./utils/AllData";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [resData, setresData] = useState(AllData);
  const [searchText, setsearchText] = useState("");

  // useEffect(() => { //wanted to use Swiggy API but it keeps changing in few days
  //   // fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const raw = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const data = await raw.json();
  //   console.log(
  //     data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  //   );
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    setresData(
      AllData.filter((searchData) =>
        searchData?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setsearchText(""); //empties the search-box after Search
  };

  //Online Status check
  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false){
    return (<div className="heading"><h1>Oops! It looks like you're Offline</h1></div>)
  }

  if (!resData.length) {
    //Conditional Rendering if else
    return <div className="heading"><h1>No Results Found!</h1></div>;
    // return <Shimmer />
  }

  return (
    <div className="body mx-10">
      <div className="heading text-center font-semibold text-4xl mt-5 mb-2">
        <h1>Restaurants</h1>
      </div>
      <div className="filter flex items-center">
        <div className="search my-4">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-bar border border-black rounded-lg p-1.5 w-80"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            />
            <button type="submit" className="search-btn ml-4 mr-24 bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full">
              Search
            </button>
          </form>
        </div>
        <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-2xl"
          onClick={() => {
            setresData(
              resData.filter((data) => data.info.rating.rating_text >= 4)
            );
          }}
        >
          <h3> 
            Top Rated Restaurants above 4<i className="fa-solid fa-star"></i>
          </h3>
        </button>
        </div>
      </div>
      <div className="card-container flex flex-wrap justify-between">
        {resData.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.order.actionInfo.clickUrl}
            key={restaurant.info.resId}
          >
            <Card resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
