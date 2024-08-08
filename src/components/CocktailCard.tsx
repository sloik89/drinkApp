import { type Drink } from "../utilis/types";
import { Link } from "react-router-dom";
const CocktailCard = ({
  id,
  image,
  name,
  glass,
}: {
  image: string;
  id: string;
  name: string;
  glass: string;
}) => {
  return (
    <div className="drink-card">
      <img src={image} alt="drink-image" className="drink-img" />
      <footer>
        <h4>{name}</h4>
        <h4>{glass}</h4>
        <Link to={`/cocktail/${id}`}>details</Link>
      </footer>
    </div>
  );
};

export default CocktailCard;
