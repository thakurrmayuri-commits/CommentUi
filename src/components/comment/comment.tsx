
import { useState } from "react";
import useComment from "./useComment";




const Comments = () => {

    const { comments } = useComment();

    const [commentBody, setCommentsBody] = useState("");



    return (<>
        <div className="h-screen bg-yellow-50"><div className="text-white bg-gray-400">User Comments</div>
            <div style={{
                backgroundColor: "rgba(248, 248, 245, 1)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px", padding: "20px",
            }}>{comments.map((comment) =>
                <div key={comment.id}

                ><p style={{ border: "1px solid #767475ff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", backgroundColor: "rgba(242, 230, 176, 1)", padding: "4px", color: "grey", fontFamily: "fantasy" }}

                    onClick={() => {
                        setCommentsBody(comment.body);
                        console.log("Comment body: ", commentBody)
                    }
                    }>{comment.body}</p>

                </div>
            )}
            </div>
        </div >
    </>


    )
}
export default Comments;