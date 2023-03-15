import axios from "axios";

function postDistance(fields, setAlert) {
  return axios
    .post("http://localhost:4000/progress", fields)
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
