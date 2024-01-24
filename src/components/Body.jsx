import { AllData } from "./utils/AllData";
import Card, { Promoted } from "./Card";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import useOnlineStatus from "./utils/useOnlineStatus.js";

const Body = () => {
  const [resData, setresData] = useState(AllData);
  const [searchText, setsearchText] = useState("");

  const { setuser, user } = useContext(UserContext);

  const PromotedCard = Promoted(Card); //passing the Card component to the higher order component
  //and creating a new component PromotedCard

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
  if (onlineStatus === false) {
    return (
      <div className="font-bold flex justify-center mt-4 text-xl">
        <h1>Oops! It looks like you're Offline</h1>
      </div>
    );
  }

  if (!resData.length) {
    //Conditional Rendering if else
    return (
      <div className="font-bold flex justify-center mt-4 text-xl">
        <h1>No Results Found!</h1>
      </div>
    );
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
            <button
              type="submit"
              className="search-btn ml-4 mr-15 bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full"
            >
              Search
            </button>

            <label className="ml-32 text-xl font-bold">User ➯</label>
            <input
              type="text"
              className="search-bar border ml-2 mr-14 border-black rounded-lg p-1.5 w-80"
              value={user}
              maxLength={10}
              onChange={(e) => setuser(e.target.value)}
            />
          </form>
        </div>
        <div className="ml-36">
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
      <div className="card-container flex flex-wrap">
        {resData.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.order.actionInfo.clickUrl}
            key={restaurant.info.resId}
          >
            {
              restaurant.info.promoted ? <PromotedCard resdata = {restaurant} /> : <Card resdata={restaurant}/>
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
