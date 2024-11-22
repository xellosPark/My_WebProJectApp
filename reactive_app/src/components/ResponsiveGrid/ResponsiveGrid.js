import React from "react";
import styles from "./ResponsiveGrid.module.css"; // 스타일 가져오기

function ResponsiveGrid() {
  return (
    <div className={styles.grid}>
      {[...Array(12).keys()].map((item) => (
        <div key={item} className={styles.gridItem}>
          Item {item + 1} {/* 각 항목 표시 */}
        </div>
      ))}
    </div>
  );
}

export default ResponsiveGrid;