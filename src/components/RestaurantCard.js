import { useDispatch } from "react-redux";
import { addItems } from "./utils/cartSlice";

const RestaurantCard = ({ data, showItem, setshowIndex }) => {
  // console.log(data);
  const { name, categories, id } = data?.menu;

  // console.log(setshowIndex);
  const handleClick = () => {
    setshowIndex(); //calls the setshowIndex() in its parent RestaurantMenu
  };

  const dispatch = useDispatch();
  // console.log(dispatch)//returns function
  const handleAddItem = (menu) => {
    console.log(menu); //adding the food items to the cart
    dispatch(addItems(menu)); //{payload: menu obj}
    // alert(items?.item?.name + " has been Added to the Cart!");
  };
  return (
    <>
      <div className="bg-gray-50 shadow-lg my-4 lg:my-8 lg:w-2/4 mx-auto select-none">
        <div
          className="flex justify-between p-4 cursor-pointer"
          id={id}
          onClick={handleClick} //becomes true/false after clicked
        >
          <span className="text-xl font-bold">
            {name}({categories[0]?.category?.items?.length})
          </span>
          <span className="text-2xl">⬇</span>
        </div>
        {showItem && ( //if true show the whole component
          <div className="menu-container">
            {categories[0]?.category.items?.map((menu) => (
              <div
                className="menu-card mx-4 mr-12 border-gray-300 border-b-2 py-4 pl-6 flex justify-between"
                key={menu.item.id}
              >
                <div>
                  <div className="mb-2 lg:flex">
                    <span className="font-semibold">{menu?.item?.name}</span>
                    <span className="font-semibold">
                      - ₹
                      {Math.floor(menu.item.price) ||
                        Math.floor(menu.item.max_price)}
                    </span>
                  </div>
                  <h6 className="hidden lg:inline text-xs p-2">
                    {menu?.item?.desc}
                  </h6>
                </div>
                <button
                  className="absolute bg-black text-white px-1 lg:px-2 rounded-md ml-[67vw] lg:ml-[622px] text-xs h-6 lg:h-10 hover:bg-gray-600 font-medium"
                  onClick={() => handleAddItem(menu)}
                >
                  Add +
                </button>

                {menu?.item?.item_image_thumb_url ? (
                  <img
                    className=" h-20 lg:w-24"
                    src={menu?.item?.item_image_thumb_url}
                  />
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantCard;
