import { connect } from "react-redux";
import {
  LoginButton,
  LoginWrapper,
  LogoutButton,
  SideBtnWrapper,
} from "./styles/SideMenu.styled";
import { useState } from "react";
import { removeUser } from "../redux/actions/auth-actions";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

const UserAuth = ({ user, removeUser }) => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoading(true);
    api
      .get("/logout")
      .then(() => {
        removeUser();
      })
      .catch(function (err) {
        console.log(err);
        setIsLoading(false);
      });
  }
  
  return (
    <LoginWrapper>
      {user ? (
        <>
          <span>
            Hi, <strong>{user}</strong>
          </span>
          <SideBtnWrapper>
            <LogoutButton onClick={() => navigate("/home/account")}>Your Account</LogoutButton>
            <LogoutButton onClick={handleLogout} disabled={isLoading}>{isLoading ? "Please wait..." : "Logout"}</LogoutButton>
          </SideBtnWrapper>
        </>
      ) : (
        <>
          <span style={{ marginRight: "1px" }}>Please</span>
          <LoginButton to="login">Login</LoginButton>
          <span style={{ margin: "0 1px" }}>or</span>
          <LoginButton to="register">Register</LoginButton>
        </>
      )}
    </LoginWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeUser: (user) => dispatch(removeUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
