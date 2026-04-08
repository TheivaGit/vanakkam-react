import { useEffect, useState } from "react";
import { GIT_HUB_USER_API_URL } from "../../utils/constant";

const User = ({ name, location, contact }) => {

    const style = {
        backgroundColor: "rgba(240, 240, 240, 1)",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "200px",
        margin: "8px",
    };
    const [userData, setUserData] = useState({
        name: name || "Muthu Pandi",
        location: location || "Madurai",
        contact: contact || "9876543210"
    });

    async function fetchData() {
        const data = await fetch(GIT_HUB_USER_API_URL);
        const json = await data.json();
        console.log(`fetched data:`, json);
        setUserData(json);
    }

    useEffect(() => {
        fetchData();
        const timerId = setInterval(() => {
            console.log('vanankam react OP inside useEffect');
        }, 1000);

        return () => {
            console.log(`cleanup for`);
            clearInterval(timerId);
        }
    }, []);

    return (
        <div className="userCard" style={style}>
            <h2>Name: {userData.name}</h2>
            <h3>Location: {userData.location}</h3>
            <h4>Contact: {userData.contact}</h4>
        </div>)
}
export default User;