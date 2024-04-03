import React from "react";
import ReactDOM from "react-dom/client"

// JSX Heading - JSX is not HTML in javascript - converted to component now

const Jsxheading = () => (<h1 className="head"> 
                    Vanakkam React from JSX 🚀
                    </h1>);

// React funtional components
const HeadingComponent = () => {
    return <h1>Vanakkam react functional component</h1>
}

const HeadingJSXComponentShorthand = () => <h1 className="shorthand">Vanakkam react functional shorthand</h1>;

// React component using normal JS function
const NormalJSComp = function () {
    return (
        <h1>
            hello i'm in normal JS functional react component
        </h1>
    )
}

const HeadingJSXComponentShorthand2 = () => (
    <div id="container">
        {/* Component composition */}
        <Jsxheading />
        <HeadingComponent / >
        <HeadingJSXComponentShorthand />
        <h1 className="shorthand2">Vanakkam react functional component shorthand2</h1>
        <NormalJSComp />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingJSXComponentShorthand2 />); // replace any content inside the root
