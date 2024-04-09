import RestoCardComp from "./Resto-card-comp"
import restoData from "../utils/resto-card-data"

const BodyComp = () => {
    return (
        <div className="body">
            <div className="searchBar">Search</div>
            <div className="restContainer">
               {restoData.map(resturent => (
               <RestoCardComp key={resturent.info.id} resturantData={resturent} />
               ))}
            </div>
        </div>
    )
};

export default BodyComp;