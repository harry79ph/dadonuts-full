import React, { useEffect, useState } from "react";
import "./App.css";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/theme";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./Home";
import NotFound from "./components/NotFound";
import { connect } from "react-redux";
import { calcTotals } from "./redux/actions/cart-actions";
import { titles } from "./data/titles";
import { addUser } from "./redux/actions/auth-actions";
import api from "./api/axiosConfig";

const App = ({ cart, calcTotals, addUser }) => {
  const [animation, setAnimation] = useState("animate");
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] ?? "Dadonuts";
    document.onkeydown = (e) => {
      if (e.key === "Enter") {
        document.activeElement.click();
      }
    }
    return () => {
      document.onkeydown = null;
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setAnimation("");
    }, 5000);
    api
      .get("/check")
      .then(({data}) => {
        if (!data.msg) addUser(data);
      })
      .catch((err) => console.log(err));
  }, [addUser]);

  useEffect(() => calcTotals(), [cart, calcTotals]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home/*" element={<Home animation={animation} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    calcTotals: () => dispatch(calcTotals()),
    addUser: (user) => dispatch(addUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
