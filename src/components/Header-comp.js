import { LOGO_URL } from "../utils/constant";

const HeaderComp = () => {
        return (
            <div className="header">
                <div className="logo">
                    <img className="logo-img" src={LOGO_URL} />
                </div>
                <div className="nav">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        );
}
export default HeaderComp;