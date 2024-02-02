import React from "react";
import ReactDOM from "react-dom/client"

// JSX Heading - JSX is not HTML in javascript

const jsxHeading = (<h1 className="head"> 
Vanakkam React from JSX 🚀
</h1>)

console.log('JSX Heading', jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); // replace any content inside the root