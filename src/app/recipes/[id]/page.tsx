import recipesData from "@/data/recipes.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import RecipePage from "./RecipePage";

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

type Props = {
   params: {
      id: string;
   };
};

export async function generateStaticParams() {
   const paths = (recipesData as { recipes: RecipeType[] }).recipes.map(
      (recipe) => ({
         id: recipe.id.toString(),
      })
   );
   return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const recipe = (recipesData as { recipes: RecipeType[] }).recipes.find(
      (recipe) => recipe.id.toString() === params.id
   );

   if (!recipe) {
      return {
         title: "Recipe Not Found",
      };
   }

   return {
      title: recipe.name,
      description: recipe.description,
   };
}

const RecipeRoute = async ({ params }: Props) => {
   const recipe = (recipesData as { recipes: RecipeType[] }).recipes.find(
      (recipe) => recipe.id.toString() === params.id
   );

   if (!recipe) {
      notFound();
   }

   return <RecipePage {...recipe} />;
};

export default RecipeRoute;
