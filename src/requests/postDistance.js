import axios from "axios";

function postDistance(distance, setAlert) {
  return axios
    .post("http://localhost:4000/progress", distance)
    .then(() => {
      setAlert({
        message: "Distance posted successfully!",
        success: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Server error - please try again later.",
        success: false,
      });
    });
}

export default postDistance;
