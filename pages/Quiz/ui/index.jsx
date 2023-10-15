import React from "react";
import styles from "../ui/index.module.scss";
import { Layout } from "../../../shared/components/layout";
import { Result } from "../module/index";

export const Quiz = () => {
  const questions = [
    {
      title: "React является...",
      variants: ["библиотека", "фреймворк"],
      correct: 0, // Правильный ответ: 'библиотека'
    },
    {
      title: "Angular является...",
      variants: ["библиотека", "фреймворк"],
      correct: 1, // Правильный ответ: 'фреймворк'
    },
    {
      title: "Что представляет собой JSX в React?",
      variants: [
        "расширение JavaScript",
        "метод обработки событий",
        "язык шаблонов",
      ],
      correct: 0, // Правильный ответ: 'расширение JavaScript'
    },
    {
      title: "Какая функция используется для объявления компонента в React?",
      variants: [
        "createComponent",
        "declareComponent",
        "registerComponent",
        "defineComponent",
      ],
      correct: 3, // Правильный ответ: 'defineComponent'
    },
    {
      title: "Redux предназначен для...",
      variants: [
        "управления состоянием приложения",
        "маршрутизации",
        "стилизации компонентов",
      ],
      correct: 0, // Правильный ответ: 'управления состоянием приложения'
    },
    {
      title:
        "Какой метод жизненного цикла вызывается после рендеринга компонента?",
      variants: [
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
        "componentWillUpdate",
      ],
      correct: 0, // Правильный ответ: 'componentDidMount'
    },
    {
      title: "Что такое Virtual DOM в React?",
      variants: [
        "виртуальное представление DOM",
        "модуль для тестирования компонентов",
        "модуль для асинхронных запросов",
      ],
      correct: 0, // Правильный ответ: 'виртуальное представление DOM'
    },
    {
      title: "Какие хуки используются для работы с побочными эффектами?",
      variants: [
        "useEffect и useUpdate",
        "useEffect и useSideEffect",
        "useEffect и useAsync",
        "useEffect и useMutation",
      ],
      correct: 0, // Правильный ответ: 'useEffect и useUpdate'
    },
    {
      title: "Какие типы компонентов существуют в React?",
      variants: [
        "функциональные и классовые",
        "основные и дополнительные",
        "главные и вложенные",
        "основные и абстрактные",
      ],
      correct: 0, // Правильный ответ: 'функциональные и классовые'
    },
    {
      title: "Какой оператор используется для условного рендеринга в JSX?",
      variants: ["if", "switch", "for", "тренарный оператор"],
      correct: 3, // Правильный ответ: 'тренарный оператор'
    },
    {
      title: "Отметите что был на паре?",
      variants: ["да", "нет"],
      correct: 1, // Правильный ответ: 'да'
    },
  ];

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const handleRestartQuiz = () => {
    // Сбрасываем состояниеnm
    setStep(0);
    setCorrect(0);
  };

  const perc = Math.round((step / questions.length) * 100);

  return (
    <Layout>
      <section className={styles.wrapper}>
        {step != questions.length ? (
          <div className={styles.quiz}>
            <div className={styles.progressBar__conteiner}>
              <div
                style={{ width: `${perc}%` }}
                className={styles.quiz__progressBar}
              ></div>
            </div>
            <h3 className={styles.quiz__title}>{question.title}</h3>
            <ul className={styles.quiz__asnwers}>
              {question.variants.map((variant, index) => (
                <li onClick={() => onClickVariant(index)} key={variant}>
                  {variant}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Result correct={correct} questions={questions} onRestart={handleRestartQuiz} />
        )}
      </section>
    </Layout>
  );
};
