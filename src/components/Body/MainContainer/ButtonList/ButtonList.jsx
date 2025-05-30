import React from "react";
import Button from "./Button/Button";
import './ButtonList.scss'
const ButtonList = () => {
  const name=[
    "new",
    "latest",
    "news",
    "live",
    "trending",
    "study",
    "fashion",
    "lifestyle",
    "new",
    "latest",
    "news",
    "live",
    "trending",
    "study",
    "fashion",
    "lifestyle"

  ]
  return (
    <div className="button-list">
      {name.map(n=><Button name={n}/>)}
    </div>
  );
};
export default ButtonList;
