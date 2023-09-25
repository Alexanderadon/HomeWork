import React from "react";
import styles from "../ui/index.module.scss";
import { LectureOne } from "../../../pages/LectureOne";
import { LectureTwo } from "../../../pages/LectureTwo";

export const Document = ({ content }) => {
  return (
    <section className={styles.lection}>
      <div className={styles.document}>
        <div className={styles.document__header}>
          <h3>Document</h3>
        </div>
        <div className={styles.content}>
          {content}
        </div>
      </div>
    </section>
  );
};
