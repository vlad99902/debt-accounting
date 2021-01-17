import React from "react";

import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import debt from "../store/Debt";
import { ToastContainer } from "react-toastify";

//styles
import "./MainPage.sass";

//components
import { Total } from "../components/Total/Total";
import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { AddCard } from "../components/AddCard/AddCard";

export const MainPage = observer(() => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="container container--padding-vertical">
        <div className="add-card-hidden">
          <AddCard mb="32px" />
        </div>
        <div className="lists">
          <div className="lists__inner">
            <div className="lists__header">
              <Header ta="left">{t("debts")}</Header>
              <Total total={debt.oweTotal}>{t("total")}</Total>
            </div>
            <div className="lists__card">
              <Card items={debt.oweList} />
            </div>
          </div>

          <div className="lists__inner">
            <div className="lists__header">
              <Header ta="left">{t("debtors")}</Header>
              <Total total={debt.shouldTotal}>{t("total")}</Total>
            </div>
            <div className="lists__card">
              <Card items={debt.shouldList} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer limit={2} />
    </>
  );
});
