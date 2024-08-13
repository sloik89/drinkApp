import { useLoaderData, type LoaderFunction, Link } from "react-router-dom";
import { customFetch } from "../utilis/customFetch";
import { type Drink } from "../utilis/types";
export const loader: LoaderFunction = async ({ params }): Promise<null> => {
  const { id } = params;

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
  console.log(drink);
  const rensderDrink = {
    id: drink.idDrink,
    name: drink.strDrink,
    img: drink.strDrinkThumb,
    category: drink.strCategory,
    glass: drink.strGlass,
    info: drink.strAlcoholic,
    instructions: drink.strInstructions,
  };
  console.log(rensderDrink);
  return (
    <div className="page">
      <header>
        <button>
          <Link to="/">Go back</Link>
        </button>
        <h3>{rensderDrink.name}</h3>
        <img
          className="drink-img"
          src={rensderDrink.img}
          alt={rensderDrink.name}
        />
      </header>
      <div className="drink-info">
        <p>
          <span>Name: </span>
          {rensderDrink.name}
        </p>
        <p>
          <span>Category: </span>
          {rensderDrink.category}
        </p>
        <p>
          <span>Glass: </span>
          {rensderDrink.glass}
        </p>
        <p>
          <span>Info: </span>
          {rensderDrink.info}
        </p>
        <p>
          <span>Instructions: </span>
          {rensderDrink.instructions}
        </p>
      </div>
    </div>
  );
};

export default Cocktail;
