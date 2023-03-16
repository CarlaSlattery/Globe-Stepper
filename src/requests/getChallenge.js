import axios from "axios";

function getChallenge(user) {
  return axios.get(`http://localhost:4000/challenges/userId/${user}`);
}

export default getChallenge;
