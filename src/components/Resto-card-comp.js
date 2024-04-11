import { CDN_URL } from "../utils/constant";

// const styleCard = {backgroundColor: "#f0f0f0"};

const RestoCardComp = (propers) => {
    const {resturantData} = propers; //need to do this with prop name we have in the component where we used
    const {
        name, 
        cuisines,
        avgRating,
        sla: {deliveryTime},
        cloudinaryImageId
    } = resturantData?.info;

    return (
        <div className="restoCard" style={{backgroundColor: "#f0f0f0", width: "23%"}}>
            <img alt="restaurent logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <div className="cousines">{cuisines.join(', ')}</div>
            <div className="ratings">{avgRating}*</div>
            <div className="delTime">{deliveryTime} mins</div>
        </div>
    );
};

export default RestoCardComp;