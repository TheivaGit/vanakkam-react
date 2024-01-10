import React from "react";
import ReactDOM from "react-dom/client"



// Javascript hello world 
// const heading = document.createElement("h1");
// heading.innerHTML = "<b>Hello world! from JavaScript</b>";

// const root = document.getElementById("javscriptRoot");
// root.appendChild(heading);


//React Hello world
// const reactHeading = React.createElement("h1", {id:"heading", xyz:"hello"}, "Hello World! from React");
// console.log("reactHeading", reactHeading);
// const reactRoot = ReactDOM.createRoot(document.getElementById("reactRoot"));
// console.log("reactRoot", reactRoot);
// reactRoot.render(reactHeading);


// Multilevel/Nested tags 
{/* <div class="parent">
    <div class="child">
        <h1></h1>
         <h2></h2>
    </div>
</div>
<div class="parent">
    <div class="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div> */}

const parent = React.createElement("div", {id: "parent"},[
                React.createElement("div", {id: "child"}, 
                [React.createElement("h1", {id: "heading"}, "Nested H1 🚀"), 
                React.createElement("h2", {}, "Nested H2")
                ]),

                React.createElement("div", {id: "child2"}, 
                [React.createElement("h1", {id: "heading2"}, "Nested Child H1"), 
                React.createElement("h2", {}, "Nested H2")])
            ]);

console.log('parent', parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
