import { useState, useEffect } from "react";

interface Review {
    id: number;
    firstName: string;
    lastName: string;
    userComment: string;
}

const UserSpace = () => {
    //const reviews = props.reviews;
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:8000/reviews`);
            const data: Review[] = await res.json();
            setReviews(data);
        };
        fetchData().catch(console.error);
    }, []);

    return (
        <div className=""><div><h1 className="bg-green-700/30 text-gray-500">User Space</h1></div>
            <div className="grid grid-cols-4 gap-4">{reviews.map((review) =>
                <div key={review.id}
                    className="w-90 px-8 py-2 bg-lime-50 flex flex-col justify-center
                     rounded-lg border-2 border-gray-200 shadow-lg text-gray-500 gap-4 font-sans font-bold hover:bg-yellow-100">
                    <p className="text-green-700">{review.firstName} {review.lastName}</p>
                    <p>{review.userComment}</p>
                </div>
            )}</div></div>
    );
};
export default UserSpace;