/**
 * About component
 * Path: src/components/About-comp.js
 */

const About = () => {
    return (
        <section className="about" style={{ padding: 20, lineHeight: 1.6 }}>
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
        </section>
    );
};

export default About;