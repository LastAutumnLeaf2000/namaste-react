const Card = ({ resdata }) => {
  const { name, rating, costText, image, o2FeaturedImage, cuisine } =
    resdata?.info;
  // console.log(resdata);
  return (
    <div className="card">
      <img className="res-logo" src={image.url} alt={o2FeaturedImage.url} />
      <h3>{name}</h3>
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
