import React from "react";

function Card({ name, onCardClick }) {
  return (
    <div
      class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
      onClick={() => onCardClick(name)}
    >
      <h3>{name}</h3>
    </div>
  );
}

export default Card;
