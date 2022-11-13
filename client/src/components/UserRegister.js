import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FormButton,
  FormInfoText,
  FormWrap,
  LoginButton,
  UserForm,
  UserInput,
} from "./styles/SideMenu.styled";
import api from "../api/axiosConfig";

const UserRegister = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    const { firstname, surname, email, password, confirm } = formValues;

    const check = password === confirm;
    if (!check) return setMessage("Oops! The passwords do not match");
    setUser({ ...user, firstname, surname, email, password });
  };

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    api
      .post("/signup", user)
      .then((data) => {
        setMessage(data.data.msg);
        setUser(null);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.log(err);
        const text =
          err.code === "ERR_BAD_REQUEST"
            ? err.response.data.errors[0].msg
            : "Please check your connection";
        setMessage(text);
      });
    setIsLoading(false);
  }, [user]);

  return (
    <FormWrap>
      {message ? <FormInfoText>{message}</FormInfoText> : <h2>Register</h2>}
      {message === "Registration successful!" ? (
        <FormInfoText style={{color: "#000"}}>
          Please <LoginButton to="/home/login">Login</LoginButton> to your account
        </FormInfoText>
      ) : (
        <>
          <UserForm ref={formRef} onSubmit={handleSubmit}>
            <UserInput
              type="text"
              name="firstname"
              placeholder="First Name"
              required
              maxLength="30"
              autoFocus
            />
            <UserInput
              type="text"
              name="surname"
              placeholder="Surname"
              maxLength="30"
              required
            />
            <UserInput type="email" name="email" placeholder="Email" required />
            <UserInput
              type="password"
              name="password"
              placeholder="Password"
              maxLength="30"
              required
            />
            <UserInput
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              maxLength="30"
              required
            />
            <FormButton
              type="submit"
              disabled={isLoading}
              value={isLoading ? "Please wait..." : "Register"}
            />
          </UserForm>
          <p style={{ textAlign: "center" }}>
            <Link to="/home/login">Already have an account?</Link>
          </p>
        </>
      )}
    </FormWrap>
  );
};

export default UserRegister;
