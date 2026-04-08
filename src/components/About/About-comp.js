/**
 * About component
 * Path: src/components/About-comp.js
 */
import "./About-comp.css";
// import UserClass from "../User/UserClass";
import User from "../User/User";
import { Component } from "react"; // Destructuring import for Component base class from React


export default class AboutClass extends Component {
    constructor(props) {
        super(props);
        // console.log("parent constructor called");
    }

    componentDidMount() {
        // console.log("parent componentDidMount called");
    }

    render() {
        // console.log("parent render called");
        return (
            <section className="about">
                <h2>About This Project</h2>
                <p>
                    Vanakkam — this is a small study project built with React to practice
                    component-driven development. It demonstrates basic component structure,
                    props, state and composition patterns you can expand on.
                </p>
                <p>
                    Use this component as a starting point for adding more details about the
                    app, authorship, license, or links to documentation and source code.
                </p>
                <h2>Team Members</h2>
                <User name="Theiva (class)" location="bangalore" contact="5678917772" />
            </section>
        );
    }
}


// const About = () => {
//   return (
//     <section className="about">
//       <h2>About This Project</h2>
//       <p>
//         Vanakkam — this is a small study project built with React to practice
//         component-driven development. It demonstrates basic component structure,
//         props, state and composition patterns you can expand on.
//       </p>
//       <p>
//         Use this component as a starting point for adding more details about the
//         app, authorship, license, or links to documentation and source code.
//       </p>
//       <h2>Team Members</h2>
//       <UserClass name="Theiva (class)" location="bangalore" contact="5678917772" />
//     </section>
//   );
// };

// export default About;