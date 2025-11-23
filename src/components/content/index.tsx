
import React, { useEffect, useState } from "react";
import UserForm from "../forms/index";
import "./content.css";
import useComment from "../comment/useComment";


const Content = () => {
    const { comments } = useComment();
    const [commentBody, setCommentsBody] = useState("");


    const [users, setUsers] = React.useState<any[]>([]);   //  this component
    const [userName, setUser] = useState({
        firstName: "",
        lastName: "",
    });



    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/users`);
            const data = await response.json();
            setUsers(data.users);

        }
        catch (error) { console.error(error) }

    }

    useEffect(() => {
        fetchData();
        console.log("data fetched");

    }, []);


    return (
        <><div style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr",
            backgroundColor: "rgba(248, 248, 245, 1)",
            justifyContent: "space-between",
            padding: "10px",
            gap: "10px"
        }}>
            <div >
                <h1 style={{ width: "300px", padding: "10px", borderRadius: "8px", backgroundColor: "rgba(176, 207, 242, 1)", color: "grey" }}>Users</h1>{users.map((user) =>
                (
                    <div key={user.id} //className="useDetails"
                        className="px-4 py-4 flex justify-center border rounded border-gray-400
                        text-gray-500 font-sans cursor-pointer hover:bg-gray-400 hover:text-white gap-8">
                        <p
                            onClick={() => {
                                setUser({ firstName: user.firstName, lastName: user.lastName });
                                console.log("Comment body: ", userName.firstName, userName.lastName)
                            }}
                        >{user.firstName} {user.lastName}</p>
                    </div>
                ))
                }</div>
            <div
                style={{
                    width: "auto",
                    backgroundColor: "rgba(248, 248, 245, 1)",
                    border: "4px",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                    padding: "10px",
                    color: "grey"
                }}><h1 style={{
                    borderRadius: "8px", padding: "10px", backgroundColor: "rgba(176, 207, 242, 1)", color: "grey"
                }}>User Comments</h1>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    //gap: "20px",
                    padding: "20px",
                    backgroundColor: "rgba(248, 248, 245, 1)",
                    fontFamily: "fantasy"
                }}>{comments.map((comment) =>
                    <div key={comment.id}
                        style={{
                            padding: "10px",
                            textAlign: "center",
                            boxShadow: "2py 2px 5py rgba(0,0,0,0.1)",
                            transition: "transform 0.2s",
                            cursor: "pointer",
                        }}
                    ><p className="border px-4 py-4 rounded shadow-lg border-gray-400 flex justify-center text-gray-500 cursor-pointer hover:bg-gray-400 hover:text-white"

                        onClick={() => {
                            setCommentsBody(comment.body);
                            console.log("Comment body: ", commentBody)
                        }
                        }>{comment.body}</p>

                    </div>
                )}
                </div>
            </div>

            <div style={{
                height: "auto",
                padding: "4px",

            }}>
                <UserForm userComment={commentBody} userName={userName} /></div>
        </div ></>
    );
};
export default Content;