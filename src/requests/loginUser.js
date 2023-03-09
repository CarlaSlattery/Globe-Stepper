import axios from "axios";

const loginUser = (fields, setAlert) => {
  return axios
    .post("http://localhost:4000/signin", fields)
    .then(() => {
      setAlert({
        message: "Login successful!",
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

export default loginUser;
