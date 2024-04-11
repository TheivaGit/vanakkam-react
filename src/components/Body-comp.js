import restoData from "../utils/resto-card-data";
import RestoCardComp from "./Resto-card-comp";
import { useState } from "react";

const BodyComp = () => {

    // local state variable
    const [restoDataList, setrestoDataList] = useState(restoData);

    console.log("restoDataList", restoDataList);

    return (
        <div className="body">
            <div className="searchBar">
                <button className="searchBtn" onClick={()=>{
                    console.log("btn-clicked");
                   const filteredArr =  restoDataList.filter((elm)=>elm.info.avgRating > 4);
                   setrestoDataList(filteredArr); //update the list => in normal function we do list.push or etc here we we do with hooks(noraml js function given by react developers)
                }}>
                         
                    Top Restaurents 
                </button>
                <button className="searchBtn" onClick={()=>{
                    console.log("btn-clicked");
                   const filteredArr =  restoData;
                   setrestoDataList(filteredArr); //update the list => in normal function we do list.push or etc here we we do with hooks(noraml js function given by react developers)
                }}>
                         
                  Clear filter
                </button>
            </div>
            <div className="restContainer">
               {restoDataList.map(resturent => (
               <RestoCardComp key={resturent.info.id} resturantData={resturent} />
               ))}
            </div>
        </div>
    );
};

export default BodyComp;