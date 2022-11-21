import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import {
  ChevDownImg,
  FormButton,
  FormInfoText,
  FormWrap,
  LogoutButton,
  UserForm,
  UserInput,
} from "./styles/SideMenu.styled";
import { addUser } from "../redux/actions/auth-actions";

const UserAccount = ({ info: { user, email, phone, ...address }, addUser }) => {

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isDisplayed, setIDisplayed] = useState(true);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    setUserData({ email, ...formValues });
  };

  useEffect(() => {
    if (!userData) return;
    setMessage("");
    setIsLoading(true);
    const controller = new AbortController();
    api
      .put("/update", userData, {signal: controller.signal})
      .then(({data}) => {
        setMessage(data.msg);
        addUser(userData);
        setUserData(null);
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
    return () => controller.abort()
  }, [addUser, userData]);

  useEffect(() => {
    if (address.city) setIDisplayed(false);
  }, [address.city])

  const addressArr = Object.values(address);

  return (
    <FormWrap>
      {message ? <FormInfoText>{message}</FormInfoText> : <h2>Your Account</h2>}
      {message === "Contact details saved successfully!" ? (
        <FormInfoText>
          <Link to="/home" style={{textDecoration: "underline"}}>Go back</Link>
        </FormInfoText>
      ) : (
        <>
          {address.city && <><h4>Adress:</h4>
          {addressArr.map(v => <p key={v}>{v}</p>)}
          <h4>Phone:</h4>
          <p>{phone}</p></>}
          {address.city ? <LogoutButton onClick={() => setIDisplayed(prev => !prev)}>Update your details <ChevDownImg /></LogoutButton> : <h3>Please enter your details</h3>}
          {isDisplayed && <UserForm ref={formRef} onSubmit={handleSubmit}>
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
          </UserForm>}
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
    info: state.auth,
    email: state.auth.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
