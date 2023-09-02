import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default routers;
