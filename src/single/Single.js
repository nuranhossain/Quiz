import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Single.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Single = () => {
  let single = useLoaderData();
  let { questions } = single.data;

  let matchAnswer = (id, value, notify) => {
    let ans = questions.find((ids) => ids.id === id.id);

    if (ans.correctAnswer == value) {
      toast.success("🦄 Correct Answer", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Ops Wrong Answer", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <div className="quiz-container">
        <img src={single.data.logo} alt="" />
        <div className="title">
          <h3>{single.data.name}</h3>
        </div>
        <p id="ans"></p>
        <div className="question">
          {questions.map((data) => (
            <Quiz matchAnswer={matchAnswer} data={data}></Quiz>
          ))}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

function Quiz({ data, matchAnswer }) {
  return (
    <div className="quiz">
      <Link>
        <i class="fa-solid fa-eye"></i>
      </Link>
      <h3>{data.question} </h3>
      <div className="button">
        {data.options.map((option) => (
          <button
            className="buttons"
            onClick={() => matchAnswer(data, option)}
            value={option}
          >
            {option}
          </button>
        ))}

        {}
      </div>
    </div>
  );
}

export default Single;
