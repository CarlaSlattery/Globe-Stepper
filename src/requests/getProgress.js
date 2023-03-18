import axios from "axios";

function getProgress(user, challenge) {
  return axios.get(
    `http://localhost:4000/progress/UserId/${user}/ChallengeId/${challenge}`
  );
}

export default getProgress;
