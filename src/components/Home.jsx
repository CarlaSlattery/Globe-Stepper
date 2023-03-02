import React from "react";

// component imports
import ChallengesList from "./ChallengesList";
import CurrentChallenge from "./CurrentChallenge";

import "../styles/challenges-component.css";

function Home() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Globestepper</h1>
        <h4>Where will you walk?</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          voluptas quis tempore facere libero nisi maxime dignissimos similique
          exercitationem odio ducimus, totam voluptatem inventore ab quia quos,
          perferendis, optio saepe. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Architecto voluptas quis tempore facere libero nisi
          maxime dignissimos similique exercitationem odio ducimus, totam
          voluptatem inventore ab quia quos, perferendis, optio saepe.
        </p>
      </div>
      <ChallengesList />
      <CurrentChallenge />
    </div>
  );
}

export default Home;
