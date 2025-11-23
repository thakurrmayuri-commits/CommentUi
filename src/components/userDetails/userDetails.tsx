import { useEffect, useState } from "react";
import type { recipeProps } from "../utils/types.tsx"
import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const { id } = useParams();
    const [recipe, setProducrId] = useState<recipeProps>();

    const getProduct = async (id: string) => {
        try {
            const response = await fetch(`https://dummyjson.com/recipes/${id}`);
            const data = await response.json();
            setProducrId(data);
            console.log(data);
        }
        catch (error) { console.error("err") };

    }

    useEffect(() => {
        if (id) {
            getProduct(id);
        }
    }, [id])

    return (
        <><section style={{
            background: "rgba(239, 211, 225, 1)", padding: "20px",

        }}><h1 style={{ color: "rgba(158, 63, 110, 1)", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", }}>
                {recipe?.id}. {recipe?.name}
            </h1>
            <div style={{ fontFamily: "serif" }}>
                <p>{recipe?.ingredients}</p>
                <p>{recipe?.instructions}</p></div>
        </section></>
    );
}
export default ProductDetails;