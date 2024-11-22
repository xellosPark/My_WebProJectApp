// 페이지나 섹션의 제목을 렌더링.
// 스타일이 적용된 텍스트를 출력.
import React from "react";
import styles from "./Title.module.css";

function Title({ text }) {
  return (
    /* 텍스트를 표시하는 제목 컴포넌트 */
    <h1 className={styles.title}>{text}</h1>
  );
}

export default Title;