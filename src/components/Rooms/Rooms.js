import React from "react";
import room1 from "../../Images/Rooms/room1.jpg";
import room2 from "../../Images/Rooms/room2.jpg";
import room3 from "../../Images/Rooms/room3.jpg";
import Room from "../Room/Room";
import "./Rooms.css";

const rooms = [
  { id: 1, name: "Single Room", img: room1 },
  { id: 2, name: "Double Room", img: room2 },
  { id: 3, name: "Family Room", img: room3 },
];

const Rooms = () => {
  return (
    <div className="room mt-4">
      <h1 className="text-center">Pick Your Match</h1>
      <div className="roomsContainer">
        {rooms.map((room) => (
          <Room room={room} key={room.id}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
