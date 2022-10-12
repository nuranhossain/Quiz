import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiestion from "./Question/Quiestion";
import Home from "./Home/Home";
import { loader } from "react-router-dom";
import Single from "./single/Single";

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
          path: "/about",
          element: <h1>About</h1>,
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
