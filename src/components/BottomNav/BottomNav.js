import React from "react";

import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import { observer } from "mobx-react-lite";

import "./BottomNav.sass";
import homeIMG from "../../assets/home.png";
import plusIMG from "../../assets/plus.png";
import settingsIMG from "../../assets/settings.png";

export const BottomNav = observer(() => {
  return (
    <div className="wrapper-bottom">
      <nav className="bottom-nav">
        <div className="bottom-nav__inner">
          <div class="bottom-nav__home bottom-nav__icon">
            <NavLink to="/home">
              <img src={homeIMG} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="bottom-nav__inner">
          <div class="bottom-nav__add bottom-nav__icon">
            <Button bw="0px" padding="0 0" bg="none">
              <img src={plusIMG} alt="" />
            </Button>
          </div>
        </div>
        <div className="bottom-nav__inner">
          <div class="bottom-nav__settings bottom-nav__icon">
            <NavLink to="/settings">
              <img src={settingsIMG} alt="" />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
});
