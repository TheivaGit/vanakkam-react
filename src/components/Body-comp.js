// import restoData from "../utils/resto-card-data";
import RestoCardComp from "./Resto-card-comp";
import { useEffect, useState } from "react";
import ShimmerUI from "./shimmer-ui";

const BodyComp = () => {
  // local state variable
  const [restoDataList, setRestoDataList] = useState([]);
  let restData;

  useEffect(() => {
    fetchResto();
  }, []);

  const fetchResto = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("data", data);
    const resJson = await data.json();

    restData =
      resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestoDataList(restData);

    console.log("resJson", resJson, restData);
  };

  console.log("restoDataList", restoDataList, restData);

  //   if(restoDataList.length <= 0) { // not good ux practice
  //     return <h1>Loading...</h1>
  //   }

  return restoDataList?.length <= 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="searchBar">
        <button
          className="searchBtn"
          onClick={() => {
            console.log("btn-clicked");
            const filteredArr = restoDataList?.filter(
              (elm) => elm?.info?.avgRating > 4.2
            );
            setRestoDataList(filteredArr); //update the list => in normal function we do list.push or etc here we we do with hooks(normal js function given by react developers)
          }}
        >
          Top Restaurants
        </button>
        <button
          className="searchBtn"
          onClick={() => {
            console.log("btn-clicked");
            const filteredArr = restoDataList;
            setRestoDataList(restoDataList); //update the list => in normal function we do list.push or etc here we we do with hooks(normal js function given by react developers)
          }}
        >
          Clear filter
        </button>
      </div>
      <div className="restContainer">
        {restoDataList?.map((restaurant) => (
              <RestoCardComp
                key={restaurant?.info?.id}
                restaurantData={restaurant}
              />
            ))
          }
      </div>
    </div>
  );
};

export default BodyComp;
