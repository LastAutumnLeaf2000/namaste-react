const Card = ({ resdata }) => {
  const { name, rating, costText, image, o2FeaturedImage, cuisine } =
    resdata?.info;
  // console.log(resdata);
  return (
    <div className="card w-52 h-96 bg-gray-100 hover:bg-gray-300 mb-8 p-3 rounded-lg">
      <img className="res-logo h-44 rounded-lg" src={image.url} alt={o2FeaturedImage.url} />
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

export default Card;
