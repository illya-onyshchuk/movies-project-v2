import React from "react";
import style from "./index.module.css";

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.i}></div>
      <div className={style.a}></div>
      <div className={style.u}></div>
    </div>
  );
};

export default Loading;
