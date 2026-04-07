import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log(`${props?.name || "Unknown"} constructor called with props:`);
    }

    componentDidMount() {
        console.log(`${this.props?.name || "Unknown"} componentDidMount called`);
    }

    render() {
        console.log(`${this.props?.name || "Unknown"} render called with props:`);
        const { name, location, contact } = this.props;
        const style = {
            backgroundColor: "rgba(240, 240, 240, 1)",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "200px",
            margin: "8px",
        };

        return (
            <div className="userCard" style={style}>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Clicked {this.state.count} times
                </button>
            </div>
        );
    }
}

export default UserClass;