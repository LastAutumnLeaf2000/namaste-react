import { AllData } from "./utils/AllData";
import Card from "./Card";

const Body = () => {
  return (
    <div className="body">
      <h3>Search</h3>
      <div className="card-container">
        {AllData.map((restaurant) => (
          <Card key={restaurant.info.resId} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
