import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = ({ items, handleButton, lin }) => {
  let { logo, id, name, total } = items;

  return (
    <div className="card-contain">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <div className="info text-center my-4">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Do Your Best. <i className="fa-regular fa-thumbs-up thumbs"></i>
            </Card.Text>
          </div>
          <div className="card-button  justify-content-around d-flex align-items-center">
            <p className="me-2 total-quiz">Total Quiz: {total}</p>
            <Link
              onClick={() => handleButton(id)}
              variant="danger"
              className="btn btn-danger"
              to={`/quiz/${id}`}
            >
              Take This Quiz <i className="fa-solid fa-arrow-right ms-2"></i>{" "}
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Category;
