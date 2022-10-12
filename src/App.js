import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiestion from "./Question/Quiestion";
import Home from "./Home/Home";
import { loader } from "react-router-dom";
import Single from "./single/Single";
import Statistics from "./Statistics/Statistics";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Quiestion></Quiestion>,
        },
        {
          path: "/Statistics",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics></Statistics>,
        },
        {
          path: "/quiz/:id",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Single></Single>,
        },
        {
          path: "*",
          element: <h1>Nothing Found</h1>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
