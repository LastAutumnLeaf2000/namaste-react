import { AllData } from "./utils/AllData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [resData, setresData] = useState(AllData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setresData(AllData.filter((data) => data.info.rating.rating_text >= 4));
          }}>
          <h3>Top Rated Restaurants above 4<i class="fa-solid fa-star"></i></h3>
        </button>
      </div>
      <div className="card-container">
        {resData.map((restaurant) => (
          <Card key={restaurant.info.resId} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
