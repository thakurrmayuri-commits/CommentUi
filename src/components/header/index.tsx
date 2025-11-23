
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header style={{
            width: "100%", height: "50px", backgroundColor: "rgba(130, 181, 241, 1)", color: "white", padding: "4px", display: "flex", alignItems: "center",
            justifyContent: "space-between",
        }}>Blogger
            <div >
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
            </div>
        </header>
    )
}
export default Header;