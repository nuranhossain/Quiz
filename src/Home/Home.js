import React from "react";
import Img from "./good-luck.jpg";
import { useLoaderData } from "react-router-dom";

import "./Home.css";
import Category from "../Category/Category";

const Home = () => {
  let quiz = useLoaderData();
  let Categories = quiz.data;

  let handleButton = (id) => {
    fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col title-header">
            <div className="title">
              <h1>Practice Your Knowledge</h1>
              <p>
                You Can practice Your Basic Knowledge Here. We Will Give You
                simple Question, Just Answer.
              </p>
            </div>
            <div className="title-img">
              <img src={Img} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-container">
            {Categories.map((items) => (
              <Category
                handleButton={handleButton}
                key={items.id}
                items={items}
              ></Category>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
