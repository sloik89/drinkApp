import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { type DrinkTypeAxios } from "../utilis/types";
import { customFetch } from "../utilis/customFetch";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import { useNavigation, type ActionFunction } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import { useQuery } from "@tanstack/react-query";
const querySearch = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      console.log(searchTerm);
      const res = await customFetch.get(`/search.php?s=${searchTerm}`);
      console.log(res);
      return res.data.drinks;
    },
  };
};
export const loader: LoaderFunction = async ({
  request,
}): Promise<null | DrinkTypeAxios> => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  // const res = await customFetch.get<DrinkTypeAxios>(
  //   `/search.php?s=${searchTerm}`
  // );

  return { searchTerm };
};
const Landing = () => {
  const { searchTerm } = useLoaderData() as DrinkTypeAxios;
  const { data: drinks, isLoading } = useQuery(querySearch(searchTerm));

  return (
    <div className="page">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <SearchForm searchTerm={searchTerm} />
          <CocktailList drinks={drinks} />
        </div>
      )}
    </div>
  );
};

export default Landing;
