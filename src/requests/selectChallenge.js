import axios from "axios";

const selectChallenge = (challenge) => {
  const user = localStorage.getItem("user");
  return axios.post("http://localhost:4000/challenges", challenge, user);
};

export default selectChallenge;
