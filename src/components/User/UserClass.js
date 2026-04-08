import React from "react";
import { GIT_HUB_USER_API_URL } from "../../utils/constant";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name: "Muthu Pandi",
                location: "Madurai",
                contact: "9876543210"
            }
        };
        // console.log(`${props?.name || "Unknown"} constructor called with props:`);
    }

    async componentDidMount() {
        console.log(`componentDidMount called`);

        const data = await fetch(GIT_HUB_USER_API_URL);
        const json = await data.json();
        // console.log(`${this.props?.name || "Unknown"} fetched data:`, json);
        this.setState({ userData: json });
        console.log(`componentDidMount called end`);
        this.timerId = setInterval(() => {
            console.log('vanankam react OP');
        }, 1000);

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate called with props:');
    }

    componentWillUnmount() {
        console.log(`componentWillUnmount called`);
        clearInterval(this.timerId);
    }   

    render() {
        const { name, location, contact, avatar_url } = this.state.userData;

        const style = {
            backgroundColor: "rgba(240, 240, 240, 1)",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "200px",
            margin: "8px",
        };

        return (
            <div className="userCard" style={style}>
                <img src={avatar_url} alt="User Avatar" style={{ width: "100%", borderRadius: "50%" }} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );
    }
}

export default UserClass;