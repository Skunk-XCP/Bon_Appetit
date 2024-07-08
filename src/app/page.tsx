import Header from "@/components/Header";
import Recipe from "@/components/Recipe";
import recipesData from "@/data/recipes.json";

type Ingredient = {
   ingredient: string;
   quantity?: number;
   unit?: string;
};

type RecipeType = {
   id: number;
   image: string;
   name: string;
   servings: number;
   ingredients: Ingredient[];
   time: number;
   description: string;
   appliance: string;
   ustensils: string[];
};

const typedRecipesData: RecipeType[] = recipesData.recipes as RecipeType[];

export default function Home() {
   return (
      <main className="items-center bg-cream">
         <Header />
         <h1 className="text-4xl text-center ">Welcome to My Recipe App</h1>
         <ul>
            {typedRecipesData.map((recipe) => (
               <li key={recipe.id}>
                  <Recipe {...recipe} />
               </li>
            ))}
         </ul>
      </main>
   );
}
