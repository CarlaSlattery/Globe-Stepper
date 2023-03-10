import axios from "axios";

const selectChallenge = (challenge, setAlert) => {
  return axios
    .post("http://localhost:4000/challenges", challenge)
    .then(() => {
      setAlert({
        message: "Challenge selected!",
        success: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Server error - please try again later.",
        success: false,
      });
    });
};

export default selectChallenge;
