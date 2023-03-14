import axios from "axios";

const selectChallenge = (challenge) => {
  return axios.post("http://localhost:4000/challenges", challenge);
};

export default selectChallenge;
