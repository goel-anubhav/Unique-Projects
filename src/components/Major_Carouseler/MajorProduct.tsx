import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MajorProduct(props) {
  const navigate = useNavigate();

  function gotopagelayout() {
    navigate("/page-layout", { state: { data: props } });
  }
  return (
    <div className="card">
      <img
        className="product--image"
        src={props.url}
        alt="product image"
      />
      <div className="card-body">
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
        <p>
          <button onClick={gotopagelayout}>Add To Cart</button>
        </p>
      </div>
    </div>
  );
}
