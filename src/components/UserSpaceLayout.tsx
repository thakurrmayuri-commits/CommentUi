import { Outlet } from "react-router-dom"

const UserSpaceLayout = () => {

    return (
        <div style={{ backgroundColor: "#fbfbfaff", padding: "20px", minHeight: "100vh", color: "white" }}>
            <h2>Products</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 4fr",
                    gap: "20px",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#e2d8c2ff",
                        height: "100%",
                        color: "grey"
                    }}
                >
                    <h3>Best Recipe of the Week!</h3>
                    <p>Winner: </p>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
export default UserSpaceLayout;