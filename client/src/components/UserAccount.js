import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import {
  FormButton,
  FormInfoText,
  FormWrap,
  UserForm,
  UserInput,
} from "./styles/SideMenu.styled";

const UserAccount = ({ email }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    const { street1, street2, city, postcode, phone } = formValues;

    setUser({ email, street1, street2, city, postcode, phone });
  };

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    api
      .put("/update", user)
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
      {message ? <FormInfoText>{message}</FormInfoText> : <h2>Your Account</h2>}
      {message === "Contact details saved successfully!" ? (
        <FormInfoText>
          <Link to="/home" style={{textDecoration: "underline"}}>Go back</Link>
        </FormInfoText>
      ) : (
        <>
          <p>Please enter your details</p>
          <UserForm ref={formRef} onSubmit={handleSubmit}>
            <UserInput
              type="text"
              name="street1"
              placeholder="Street Address"
              maxLength="30"
              required
              autoFocus
            />
            <UserInput
              type="text"
              name="street2"
              placeholder="Street Address (Optional)"
              maxLength="30"
            />
            <UserInput
              type="text"
              name="city"
              placeholder="Town / City"
              maxLength="30"
              required
            />
            <UserInput
              type="text"
              name="postcode"
              placeholder="Postcode"
              maxLength="30"
              required
            />
            <UserInput
              type="number"
              name="phone"
              placeholder="Phone"
              required
            />
            <FormButton
              type="submit"
              disabled={isLoading}
              value={isLoading ? "Please wait..." : "Save"}
            />
          </UserForm>
          <p style={{ textAlign: "center" }}>
            <Link to="/home">Go back?</Link>
          </p>
        </>
      )}
    </FormWrap>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps)(UserAccount);
