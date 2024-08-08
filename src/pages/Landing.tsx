import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { type DrinkTypeAxios } from "../utilis/types";
import { customFetch } from "../utilis/customFetch";

import { useNavigation } from "react-router-dom";
import CocktailList from "../components/CocktailList";
export const loader: LoaderFunction = async () => {
  console.log("first");
  const searchTerm = "margarita";
  try {
    const res = await customFetch.get<DrinkTypeAxios>(
      `/search.php?s=${searchTerm}`
    );
    console.log(res);
    return { drinks: res.data.drinks };
  } catch (err) {
    console.log(err);
  }
  //   return "loader";
};
const Landing = () => {
  const { drinks } = useLoaderData() as DrinkTypeAxios;
  console.log(useNavigation());
  return (
    <div className="page">
      <CocktailList drinks={drinks} />
    </div>
  );
};

export default Landing;
