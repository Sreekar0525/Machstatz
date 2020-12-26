import React from "react";

import "../assets/styles/PlanetCard.css";

function PlanetCard(props) {
  const { cardtype, item, addasFav, removeasFav } = props;

  let cardClass;

  if (cardtype === "grid") {
    cardClass = "grid-card";
  } else {
    cardClass = "list-card";
  }

  return (
    <div className={cardClass}>
      {item.name}
      {item.isFavourite ? (
        <div
          className="floating-remove-icon"
          onClick={() => removeasFav(item.id)}
        >
          -
        </div>
      ) : (
        <div className="floating-add-icon" onClick={() => addasFav(item.id)}>
          +
        </div>
      )}
    </div>
  );
}

export default PlanetCard;
