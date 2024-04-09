import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/header-comp";
import BodyComp from "./components/Body-comp"


const AppLayout = () => {
    return (
        <div className="appLayout">
            <HeaderComp />
            <BodyComp />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // replace any content inside the root
