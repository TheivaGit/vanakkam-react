const User = ({ name, location, contact }) => {

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
        </div>)
}
export default User;