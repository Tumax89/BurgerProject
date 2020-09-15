import React from "react";
import css from "./style.module.css";

const MenuItem = (props) => (
  <li className={css.MenuItem}>
    <a href="">{props.children}</a>
  </li>
);

export default MenuItem;
