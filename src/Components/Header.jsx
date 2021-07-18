import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <header>
      <div className="row">
        <div className="col-5">
          <img
            src="https://img-premium.flaticon.com/png/512/3649/premium/3649383.png?token=exp=1626531079~hmac=4b94215989380407b2da534f644c6545"
            alt=""
          />
        </div>
        <div className="col-7">
          <h1>Keeper App</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
