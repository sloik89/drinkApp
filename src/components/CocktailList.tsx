import { type Drink } from "../utilis/types";
import CocktailCard from "../components/CocktailCard";
const CocktailList = ({ drinks }: { drinks: Drink[] }) => {
  const formatedDrinks = drinks.map((item) => {
    const { strAlcoholic, strGlass, strDrinkThumb, idDrink, strDrink } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      glass: strGlass,
    };
  });

  return (
    <div className="drinks">
      {formatedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CocktailList;
