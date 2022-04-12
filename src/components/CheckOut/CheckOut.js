import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-center mt-4">
        This is the room you have selected {id}
      </h2>
    </div>
  );
};

export default CheckOut;
