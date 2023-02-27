import React from "react";

function ChallengeCard() {
  return (
    <div className="card-container">
      <h3 className="card-title">Hadrians Wall</h3>
      <p className="card-distances">117km / 73miles</p>
      <p className="card-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ex
        accusantium enim deserunt sapiente. Natus est nemo et reiciendis! Soluta
        quas facere sed repellendus magnam delectus velit voluptas veritatis
        minus?
      </p>
      <button className="challenge-select" type="submit">
        Join The Challenge
      </button>
    </div>
  );
}

export default ChallengeCard;
