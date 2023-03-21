import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthContext } from "../hooks/useAuthContext";

function AchievementCards({ distance, createdAt }) {
  const { user } = useAuthContext();
  if (!user)
    return (
      <div>
        <h2>You need to join a challenge</h2>
        <h3>
          View the available challenges <Link to="/"> here </Link>
        </h3>
      </div>
    );
  return (
    <div className="achievement-container">
      <div className="achievement-items">
        <div className="card-content">
          <h3 className="card-title">Your Achievements</h3>
          <p className="card-distances">{distance} Km</p>
          <p className="card-description">{createdAt}</p>
        </div>
      </div>
    </div>
  );
}

AchievementCards.propTypes = {
  distance: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default AchievementCards;
