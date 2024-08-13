import { useState } from "react";
import {
  About,
  HomeLayout,
  Landing,
  Cocktail,
  Newsletter,
  Error,
  SinglePageError,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as drinkLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: drinkLoader,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: singleCocktailLoader,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
