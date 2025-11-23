import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

const UserInfo = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const logOutHandler = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };
    if (isLoading)
        return (
            <div>Loading...</div>
        )

    if (isAuthenticated && user)
        return (
            <div className="h-8 w-auto rounded-full bg-gray-200">
                {user.picture ? (
                    <img
                        src={user.picture}
                        alt={user.name}
                        className="h-full w-full rounded-full"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-blue-400">
                        U
                    </div>
                )}
                <button className="w-full"
                    onClick={logOutHandler}>
                    Logout
                </button></div>
        )
    return (
        <div>
            <Link to="/login">
                <button>LogIn</button></Link>
        </div>
    )
}
export default UserInfo;