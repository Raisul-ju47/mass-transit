import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Transit = (props) => {
  const { name, image, id } = props.transit;

  const history = useHistory();

  const handleBooking = () => {
    history.push(`/booking/${id}`);
  };

  return (
    <div className="ticket" onClick={handleBooking}>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default Transit;
