import axios from "axios";

const registerUser = (fields, setAlert) => {
  return axios
    .post("http://localhost:4000/auth/register", fields)
    .then(() => {
      setAlert({
        message: "Registration successful!",
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

export default registerUser;
