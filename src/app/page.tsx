import RecipeCard from "@/components/RecipeCard";
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
   author: string;
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
         <h1 className="text-4xl text-center ">Welcome to My Recipe App</h1>
         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 ml-8 mr-8">
            {typedRecipesData.map((recipe) => (
               <li key={recipe.id}>
                  <RecipeCard {...recipe} />
               </li>
            ))}
         </ul>
      </main>
   );
}
