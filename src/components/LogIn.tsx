import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {

    const { loginWithRedirect } = useAuth0();

    const handleLogin = () => {
        loginWithRedirect();
    };

    return (
        <div>
            <button
                onClick={handleLogin}
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
                Sign In to Dashboard
            </button>
        </div>
    )
}
export default LogIn;