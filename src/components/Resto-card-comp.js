import { CDN_URL } from "../utils/constant";

// const styleCard = {backgroundColor: "#f0f0f0"};

const RestoCardComp = (propers) => {
  const { restaurantData } = propers; //need to do this with prop name we have in the component where we used
  console.log("restaurantData in resto card component", restaurantData);
  const {
    name = "",
    cuisines = "",
    avgRating = "",
    sla: { deliveryTime } = {},
    cloudinaryImageId = {},
  } = restaurantData?.info;

  return (
    <div
      className="restoCard"
      style={{ backgroundColor: "#f0f0f0", width: "23%" }}
    >
      <img alt="restaurant logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div className="cousins">{cuisines.join(", ")}</div>
      <div className="ratings">{avgRating}*</div>
      <div className="delTime">{deliveryTime} mins</div>
    </div>
  );
};

export default RestoCardComp;
