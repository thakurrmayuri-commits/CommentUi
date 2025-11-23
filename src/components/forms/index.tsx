import { useState } from "react";
import { useNavigate } from "react-router-dom"
//import useComment from "../comment/useComment.ts";

interface userProp {
    userComment: any;
    userName: {
        firstName: string;
        lastName: string;
    }
}
const UserForm = (prop: userProp) => {

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();


    const [user, setUser] = useState<userProp>({
        userName: {
            firstName: "",
            lastName: "",
        },
        userComment: "",
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const blog = {
            firstName: prop.userName.firstName,
            lastName: prop.userName.lastName,
            userComment: prop.userComment
        };
        setIsPending(true);
        console.log("user details: ", blog)

        fetch(`http://localhost:8000/reviews`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            //console.log("blog has been added..");
            setIsPending(false);
            navigate(`/userspaces`)
        })

    };

    const clearForm = () => {

        setUser({
            userName: {
                firstName: "",
                lastName: "",
            },
            userComment: "",
        });

    };

    return (
        <div
            style={{
                width: "auto",
                backgroundColor: "rgba(244, 241, 227, 1)",
                padding: "10px",
                boxShadow: "2px 2px rgba(0,0,0,0.1)",
                borderRadius: "4px",
                border: "1px solid #bcbbbbff",
            }}>
            <h2 style={{ borderRadius: "8px", padding: "10px", backgroundColor: "rgba(176, 207, 242, 1)", color: "grey" }}>User Form</h2>

            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">User First Name:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter first name.."
                        value={prop.userName.firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const value = e.target.value;
                            setUser((prevUser) => ({
                                ...prevUser,
                                userName: {
                                    ...prevUser.userName,
                                    firstName: value
                                }
                            }));
                        }}
                        style={{
                            width: "100%",
                            padding: "8px",
                            margin: "8px 0",
                            boxSizing: "border-box",
                            boxShadow: "2px 2px rgba(0,0,0,0.1)",
                            borderRadius: "4px",
                            border: "1px solid #bcbbbbff",
                            marginBottom: "16px",

                        }}
                    />
                </div>
                <div>
                    <label htmlFor="email">User Last Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter last name.."
                        value={prop.userName.lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const value = e.target.value;
                            setUser((prevUser) => ({
                                ...prevUser,
                                userName: {
                                    ...prevUser.userName,
                                    lastName: value
                                }
                            }));
                        }}
                        style={{
                            width: "100%",
                            padding: "8px",
                            margin: "8px 0",
                            boxSizing: "border-box",
                            boxShadow: "2px 2px rgba(0,0,0,0.1)",
                            borderRadius: "4px",
                            border: "1px solid #bcbbbbff",
                            marginBottom: "16px",
                        }}
                    /></div>
                <div>
                    <label htmlFor="message">Comment: </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter comment.."
                        value={prop.userComment}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            const value = e.target.value;
                            setUser((prevUser) => ({
                                ...prevUser,
                                userComment: value
                            }));
                        }}
                        rows={4}
                        style={{
                            width: "100%",
                            padding: "8px",
                            margin: "8px 0",
                            boxSizing: "border-box",
                            boxShadow: "2px 2px rgba(0,0,0,0.1)",
                            borderRadius: "4px",
                            border: "1px solid #bcbbbbff",
                            marginBottom: "16px",
                        }}
                    />
                </div>
                <div
                    style={{
                        marginBottom: "16px",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "end",
                    }}
                >
                    <button
                        type="button"
                        onClick={clearForm}
                        style={{
                            padding: "10px",
                            cursor: "pointer",
                            backgroundColor: "#ffffff",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            height: "40px",
                        }}
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        style={{
                            padding: "10px",
                            height: "40px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >Submit</button>
                </div>

            </form>
            <div>Preview:
                <h2>User Details</h2>
                <p>User First Name: {prop.userName.firstName}</p>
                <p>User Last Name: {prop.userName.lastName}</p>
                <p>Comment: {prop.userComment}</p>
            </div>
        </div>



    );
};

export default UserForm;
