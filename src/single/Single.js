import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Single = () => {
  let single = useLoaderData();
  console.log(single.data);
  return (
    <div>
      <div className="quiz-container">
        <div className="title">
          <h3>{single.data.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Single;
