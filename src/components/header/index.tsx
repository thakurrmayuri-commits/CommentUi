
import { Link } from "react-router-dom";
import UserInfo from "../userInfo"

const Header = () => {


    return (
        <header style={{
            width: "100%", height: "70px", backgroundColor: "rgba(130, 181, 241, 1)", color: "white", padding: "4px", display: "flex", alignItems: "center",
            justifyContent: "space-between",
        }}>Blogger
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Link to="/" style={{ margin: " 0 10px", color: "white" }}>Home
                </Link>
                <Link to="/comments" style={{ margin: " 0 10px", color: "white" }}>Comments
                </Link>
                <Link to="/userspaces" style={{ margin: " 0 10px", color: "white" }}>User Space
                </Link>
                <Link to="/recipes" style={{ margin: " 0 10px", color: "white" }}>Recipes
                </Link>
                <Link to="/calculatorReducer" style={{ margin: " 0 10px", color: "white" }}>Calculator
                </Link>
                <Link to="/ligin" style={{ margin: " 0 10px", color: "white" }}>
                    <UserInfo />
                </Link>
            </div>
        </header>
    )
}
export default Header;