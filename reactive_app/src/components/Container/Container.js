// 레이아웃 컴포넌트로, 애플리케이션의 주요 내용을 감싸는 컨테이너 역할.
// children을 통해 내부 콘텐츠를 렌더링.

import React from "react";
import styles from "./Container.module.css";

function Container({ children }) {
  return (
    /* 자식 요소를 감싸는 컨테이너 컴포넌트 */
    <div className={styles.container}>{children}</div>
  );
}

export default Container;