import axios from "axios";

function getProgress(user) {
  return axios.get(`http://localhost:4000/progress/UserId/${user}`);
}

export default getProgress;
