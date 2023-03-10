import React, { useState } from "react";
import Alert from "./Alert";
import data from "../data/challenges.json";
import selectChallenge from "../requests/selectChallenge";
import ChallengeCard from "./ChallengeCards";

function JoinChallenge() {
  const initialState = {
    challenge: {
      data,
    },
    alert: {
      message: "",
      success: false,
    },
  };

  const [challenge, setChallenge] = useState(initialState.challenge);
  const [alert, setAlert] = useState(initialState.alert);

  const handleJoinChallenge = (event) => {
    event.preventDefault();
    selectChallenge(data, setAlert);
    setAlert({ message: "", success: false });
    console.log("challenge selected", data);
  };

  const handleSelect = (event) => {
    event.preventDefault();
    setChallenge({ ...challenge, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <ChallengeCard onSubmit={handleJoinChallenge} onSelect={handleSelect} />
    </div>
  );
}
export default JoinChallenge;
