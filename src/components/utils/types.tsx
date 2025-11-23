export interface commentProps {
    id: string;
    body: string;
    postId: number;
    likes: number;
    user: string[];



}

export interface recipeProps {
    id: number;
    name: String;
    tags: String[];
    ingredients: String[];
    instructions: String[];

}