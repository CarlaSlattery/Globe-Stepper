import React from "react";
import PropTypes from "prop-types";
import hadriansWallImg from "../assets/hadrians-wall.jpg";

function ChallengeCard(props) {
  const { challenges } = props;
  const handleJoinClick = (challengeBeingJoined) => {
    console.log(challengeBeingJoined);
  }
  return (
    <div className="card-container">
      <img
        className="challenge-card-img"
        src={hadriansWallImg}
        alt="hadrians wall"
      />
      <h3 className="card-title">Hadrians Wall</h3>
      <p className="card-distances">117km / 73miles</p>
      <p className="card-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ex
        accusantium enim deserunt sapiente. Natus est nemo et reiciendis! Soluta
        quas facere sed repellendus magnam delectus velit voluptas veritatis
        minus?
      </p>
      <button
        className="challenge-select-btn"
        type="submit"
        onClick={() => {
        handleJoinClick(challenge);
        }}
      >
        Join The Challenge
      </button>
    </div>
  );
}

ChallengeCard.PropTypes = {
  challenge: PropTypes.instanceOf(Challenge).isRequired,
}

export default ChallengeCard;
