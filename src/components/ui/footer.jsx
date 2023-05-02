import React from "react";
import s from "./style.module.scss";

export default function Header() {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.left}>
          Copyright © 2021 Comify Studio. All rights reserved.
        </div>
        <div className={s.right}>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Management</a>
        </div>
      </div>
    </footer>
  );
}
