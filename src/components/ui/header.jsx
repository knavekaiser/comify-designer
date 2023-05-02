import React from "react";
import s from "./style.module.scss";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <strong>Comify</strong> | Room Configurator
        </div>
      </div>
    </header>
  );
}
