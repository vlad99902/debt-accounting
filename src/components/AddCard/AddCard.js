import React, { useState } from "react";
import NumberFormat from "react-number-format";

import { observer } from "mobx-react-lite";
import debt from "../../store/Debt";
import settings from "../../store/Settings";
import notify from "../../functions/notify";

//styles
import "../Item/Item.sass";
import "./AddCard.sass";

//components
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { EmptyCard } from "../EmptyCard/EmptyCard";
import { useTranslation } from "react-i18next";

export const AddCard = observer(({ mt = "0px", mb = "0px", bw = "1px" }) => {
  const { t, i18n } = useTranslation();
  const style = {
    marginTop: mt,
    marginBottom: mb,
  };

  const [title, setTitle] = useState("");
  const [sum, setSum] = useState();

  const clearInput = (stateFunc) => {
    stateFunc("");
  };

  const onClickAdd = async (owe = true) => {
    //TODO изменить добавление (добавлять тип в локальный стор правильно)
    try {
      await debt.add({
        title: title.trim() || t("title"),
        sum: +sum || 0,
        completed: false,
        owe,
      });
      clearInput(setTitle);
      clearInput(setSum);
    } catch (e) {
      notify(e.message);
    }
  };
  return (
    <div style={style} className="add-card">
      <EmptyCard bw={bw}>
        <Header mb="16px">{t("addTitle")}</Header>
        <div className="add-card-inner">
          <div className="add-card-inner__inputs">
            <input
              type="text"
              id="title"
              name="title"
              className="input add-card-inner__input"
              placeholder={t("title")}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <NumberFormat
              thousandSeparator={true}
              prefix={settings.languageSign}
              className="add-card-inner__input input"
              id="sum"
              name="sum"
              inputMode="numeric"
              value={sum}
              placeholder={settings.languageSign + " 0"}
              allowNegative={false}
              decimalScale={2}
              onValueChange={(values) => {
                const { floatValue } = values;
                setSum(floatValue);
              }}
            />
          </div>
          <div className="add-card-inner__buttons">
            <div className="add-card-inner__button">
              <Button text="Add" onClick={() => onClickAdd(true)}>
                {t("addDebt")}
              </Button>
            </div>

            <div className="add-card-inner__button">
              <Button text="Add" onClick={() => onClickAdd(false)}>
                {t("addDebtor")}
              </Button>
            </div>
          </div>
        </div>
      </EmptyCard>
    </div>
  );
});
