import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch } from "../utilis/customFetch";
import { type Drink } from "../utilis/types";
export const loader: LoaderFunction = async ({ params }): Promise<null> => {
  const { id } = params;
  console.log(id);
  try {
    const res = await customFetch(`lookup.php?i=${id}`);
    console.log(res);
    return res.data.drinks[0];
  } catch (err) {
    console.log(err);
  }
  console.log("single cocktail loader");
  return null;
};
const Cocktail = () => {
  const drink: any = useLoaderData();
  console.log(drink);
  const ingrident = [];
  for (const prop in drink) {
    if (prop.startsWith("strIngr") && drink[prop] !== null) {
      ingrident.push(drink[prop]);
    }
  }
  console.log(ingrident);
  return <div>Cocktail</div>;
};

export default Cocktail;
