import React from "react";

import { NavLink } from "react-router-dom";
import { Modal } from "../Modal";
import { observer } from "mobx-react-lite";

import "./BottomNav.sass";
import homeIMG from "../../assets/home.png";
import plusIMG from "../../assets/plus.png";
import settingsIMG from "../../assets/settings.png";

export const BottomNav = observer(() => {
  return (
    <div className="wrapper-bottom">
      <nav className="bottom-nav">
        <NavLink to="/home" activeClassName="active__bottom-nav">
          <div className="bottom-nav__inner">
            <div class="bottom-nav__home bottom-nav__icon">
              <img src={homeIMG} alt="" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/home" activeClassName="null" onClick>
          <div className="bottom-nav__inner">
            <div class="bottom-nav__add bottom-nav__icon">
              <img src={plusIMG} alt="" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/settings" activeClassName="active__bottom-nav">
          <div className="bottom-nav__inner">
            <div class="bottom-nav__settings bottom-nav__icon">
              <img src={settingsIMG} alt="" />
            </div>
          </div>
        </NavLink>
      </nav>
    </div>
  );
});
