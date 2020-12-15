import React from "react";
import { observer } from "mobx-react-lite";

import debt from "../store/Debt";

import "./SettingsPage.sass";

export const SettingsPage = observer(() => {
  return (
    <>
      <div className="container">
        <h1>Settings</h1>
        <a href="/home" onClick={() => debt.logout()}>
          <div style={{ textDecoration: "underline" }}>log out</div>
        </a>
      </div>
    </>
  );
});
