import styles from "./index.module.scss";

import surprice from "./img/surprice.png";

export const Result = ({ correct, questions }) => {
  return (
    <>
      <div className={`${styles.quiz} ${styles.quiz_surprice}`}>
        <img className={styles.quiz__img} src={surprice} alt="image" />
        <h3 className={styles.quiz__title}>
          Вы отгадали {correct} ответов из {questions.length}
        </h3>
        <button
          onClick={() => window.location.reload()}
          className={styles.quiz__btn}
        >
          Попробовать снова
        </button>
      </div>
    </>
  );
};
