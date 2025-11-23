import React from "react";
import { useEffect } from "react";
import "./Recipes.css"

const Recipes = () => {
    const [recipes, sertRecipes] = React.useState<any[]>([]);

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/recipes`);
        const data = await response.json();
        sertRecipes(data.recipes);
        console.log(data.recipes);

    }

    useEffect(() => {
        fetchData();
        console.log("fetched data");
    }, [])

    return (<>
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(188, 186, 178, 1)",
            color: "white"
        }}>
            <div style={{
                backgroundColor: "rgba(248, 248, 245, 1)",
                border: "4px",
                borderRadius: "4px",
                color: "white"
            }}>User Recipes</div>
            <div className="grid grid-cols-4"
            >{recipes.map((recipe) =>
                <div key={recipe.Name}
                    className="userSpaceCard">
                    <div className="text-pink-700 cursor-pointer hover:bg-gray-300 font-sans font-bold"
                    ><p>{recipe.tags}</p>
                        <p>{recipe.cuisine}</p></div>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                </div>
            )}
            </div>
        </div>
    </>


    )
}
export default Recipes;