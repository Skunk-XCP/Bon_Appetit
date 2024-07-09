import RecipePage from "@/components/RecipePage";
import recipesData from "@/data/recipes.json";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

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
   recipe: RecipeType;
};

const RecipeRoute: React.FC<Props> = ({ recipe }) => {
   const router = useRouter();

   if (router.isFallback) {
      return <div>Loading...</div>;
   }

   return <RecipePage {...recipe} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
   const paths = (recipesData as { recipes: RecipeType[] }).recipes.map(
      (recipe) => ({
         params: { id: recipe.id.toString() },
      })
   );

   return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const id = params?.id as string;
   const recipe = (recipesData as { recipes: RecipeType[] }).recipes.find(
      (recipe) => recipe.id.toString() === id
   );

   if (!recipe) {
      return { notFound: true };
   }

   return { props: { recipe } };
};

export default RecipeRoute;
