import React from "react";
import { observer } from "mobx-react-lite";

import debt from "../store/Debt";
import settings from "../store/Settings";
import { Header } from "../components/Header/Header";
import { Button } from "../components/Button/Button";

import "./SettingsPage.sass";

export const SettingsPage = observer(() => {
  return (
    <div className="container container--padding-vertical">
      <div className="content">
        <div className="content__header">
          <Header fw="600" fz="34px" ta="left" mb="48px">
            Settings
          </Header>
        </div>
        <div className="content__change-lang">
          <div>Change money sign: </div>
          <Button onClick={() => settings.setLanguage()}>
            {settings.language}
          </Button>
        </div>
        <div className="content__log-out">
          <Button onClick={() => debt.logout()}>log out</Button>
        </div>
      </div>
    </div>
  );
});
