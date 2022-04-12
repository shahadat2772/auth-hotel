import React from "react";
import { useNavigate } from "react-router-dom";
import "./Room.css";

const Room = ({ room }) => {
  const navigate = useNavigate();

  const handleCheckOut = (id) => {
    navigate(`/checkout/${id}`);
  };

  const { name, img, id } = room;
  return (
    <div className="roomContainer">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quam
        libero velit harum aspernatur, beatae possimus iure quis quas provident
        autem hic odio blanditiis optio labore ullam quod corporis nisi
      </p>
      <button onClick={() => handleCheckOut(id)}>CheckOut Room</button>
    </div>
  );
};

export default Room;
