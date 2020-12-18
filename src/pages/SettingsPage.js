import React from "react";
import { observer } from "mobx-react-lite";

import debt from "../store/Debt";
import { Header } from "../components/Header/Header";
import { Button } from "../components/Button/Button";

import "./SettingsPage.sass";

export const SettingsPage = observer(() => {
  return (
    <div className="container container--padding-vertical">
      <div className="content">
        <div className="content__header">
          <Header fw="600" fz="26px" ta="left">
            Settings
          </Header>
        </div>
        <div className="content__log-out">
          <Button onClick={() => debt.logout()}>log out</Button>
        </div>
      </div>
    </div>
  );
});
