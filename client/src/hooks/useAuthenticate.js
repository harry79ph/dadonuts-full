import axios from "axios";
import { useState } from "react";
import { apiURL } from "../data/url";

const useAuthenticate = (callback) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.withCredentials = true;

  const registerUser = (user) => {
    if (!user) return;
    if (user?.msg) return setMessage(user.msg);
    setIsLoading(true);
    axios
      .post(`${apiURL}/signup`, user)
      .then((data) => {
        setMessage(data.data.msg);
        callback();
      })
      .catch((err) => {
        console.log(err);
        const text =
          err.code === "ERR_BAD_REQUEST"
            ? err.response.data.errors[0].msg
            : "Please check your connection";
        setMessage(text);
        setIsLoading(false);
      });
  };
  const loginUser = (user) => {
    if (!user) return;
    if (user?.msg) return setMessage(user.msg);
    let name = "";
    setIsLoading(true);
    axios
      .post(`${apiURL}/login`, user)
      .then((data) => {
        setMessage(data.data.msg);
        name = data.data.fullname;
        console.log(data.data.fullname);
        callback();
      })
      .catch((err) => {
        console.log(err);
        const text =
          err.code === "ERR_BAD_REQUEST"
            ? err.response.data.errors[0].msg
            : "Please check your connection";
        setMessage(text);
        setIsLoading(false);
      });
    setIsLoading(false);
    return name;
  } 
  return { message, isLoading, registerUser, loginUser };
};

export default useAuthenticate;
