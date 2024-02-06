const Card = ({ resdata }) => {
  const { name, rating, costText, image, o2FeaturedImage, cuisine, promoted } =
    resdata?.info;
  // console.log(resdata);
  return (
    <div className="card w-full lg:w-52 lg:h-96 bg-gray-100 hover:bg-gray-300 mb-8 lg:mr-4 lg:ml-3 p-3 rounded-lg">
      <img
        className="res-logo w-[20rem] h-44 rounded-lg"
        src={image.url}
        alt={o2FeaturedImage.url}
      />
      <h3 className="font-semibold py-1 text-lg">{name}</h3>
      <h4>
        {rating.rating_text} <i className="fa-solid fa-star"></i>
      </h4>
      {/* <h4>{cuisine.map((cuisine)=>cuisine?.name)}</h4> */}
      {/*OR */}
      <h4>{cuisine[0].name}</h4>
      <h4>{costText.text}</h4>
    </div>
  );
};

//Higher order Component:= takes in a component as an argument and returns a new component

//input => Card =>> Promoted Card

export const Promoted = (Card) => {
  //Higher order component takes in a component
  return ({ resdata }) => {
    //returns a new function => "PromotedCard" when "Promoted" is called
    //console.log(resdata) //props
    return (
      //this new component/function returns a jsx
      <div>
        <label className="absolute bg-black text-white ml-3 mt-4 rounded-lg px-1 py-1">
          Promoted
        </label>
        <Card resdata={resdata} />{" "}
        {/*Calling the "Card" component and passing props */}
      </div>
    );
  };
};

export default Card;
