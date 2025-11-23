import { useEffect, useState } from "react";

const useComment = () => {
    const [comments, setComments] = useState<Array<any>>([]);

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/comments/`);
        const data = await response.json();
        setComments(data.comments);
    }


    useEffect(() => {
        fetchData();
        console.log("fetched data");

    }, []);



    return { comments };
};
export default useComment;