import React from "react";
import { observer } from "mobx-react-lite";

import debt from "../store/Debt";
import settings from "../store/Settings";
import { Header } from "../components/Header/Header";
import { Button } from "../components/Button/Button";
import imgLeftAngle from "../assets/left-arrow-angle.png";
import imgRightAngle from "../assets/right-arrow-angle.png";

import "./SettingsPage.sass";
import { useTranslation } from "react-i18next";

export const SettingsPage = observer(() => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container container--padding-vertical">
      <div className="content">
        <div className="content__header">
          <Header fw="600" fz="34px" ta="left" mb="48px">
            {t("settings")}
          </Header>
        </div>
        <div className="content__change-lang">
          <div>{t("language")}</div>
          <div className="content__change-lang--angles">
            <img
              src={imgLeftAngle}
              alt="#"
              className="content__change-lang--left-angle content__change-lang--angle"
              onClick={() => {
                settings.changeLanguage("left");
                console.log("left");
              }}
            />
            <div className="content__change-lang--lang">
              {settings.languages[settings.store.languageID].name}
            </div>
            <img
              src={imgRightAngle}
              alt="#"
              className="content__change-lang--right-angle content__change-lang--angle"
              onClick={() => {
                settings.changeLanguage("right");
                console.log("right");
                console.log(settings.store.languageID);
              }}
            />
          </div>
        </div>
        <div className="content__log-out">
          <Button onClick={() => debt.logout()}>{t("logOut")}</Button>
        </div>
      </div>
    </div>
  );
});

// {
//   /* <Button onClick={() => settings.setLanguage()}>
//   {settings.language}
// </Button> */
// }
