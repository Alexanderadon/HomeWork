import React from "react";
import styles from "./index.module.scss";
import { imagesArrow }  from "../api/index"; // массив

export const GeneratorSection = () => {

  const [searchKeywords, setSearchKeywords] = React.useState("");
  const [giveImage, setGiveImage] = React.useState(imagesArrow.images);
  const [loading, setLoading] = React.useState(true);
  const [initialLoad, setInitialLoad] = React.useState(true);

  const handleSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setInitialLoad(false);
    const searchSplit = searchKeywords.toLowerCase().split(", ");

    console.log("Search keywords:", searchSplit);

    const filterImg = imagesArrow.images.filter((image) => {
      return image.keywords.some((keywords) =>
        searchSplit.includes(keywords.toLowerCase())
      );
    });
    console.log("Filtered images:", filterImg);

    setTimeout(() => {
      setGiveImage(filterImg);
      setLoading(false);
    }, 1500);
  };

  React.useEffect(() => {
    localStorage.removeItem("searchKeywords");
  }, []);

  return (
    <section className={styles.generator}>
      <div className={styles.generator__header}>
        <h3 className={styles.generator__title}>
          Генератор изображений из текста
        </h3>
        <p className={styles.generator__text}>
          Не используйте больше 30 запросов за 5 минут
        </p>
      </div>
      <form action="/" className={styles.generator__form}>
        <input
          value={searchKeywords}
          onChange={(event) => setSearchKeywords(event.target.value)}
          type="text"
          name="text"
          className={styles.generator__inp}
        />
        <textarea
          name="text"
          value={searchKeywords}
          placeholder="Пример: Html, Сss, Js, React, Api и так далее... - писать через ','  . Более 400 ключевых слов. "
          onChange={(event) => setSearchKeywords(event.target.value)}
          className={styles.generator__textarea}
        ></textarea>
        <button
          onClick={(event) => handleSearch(event)}
          className={styles.generator__btn}
        >
          Сгенерировать изображение
        </button>
      </form>
      {loading ? (
        <div className={styles.generator__imgs}>
          <div className={styles.generator__text}>
            {initialLoad ? "Запросов не было!" : "Загрузка..."}
          </div>
        </div>
      ) : (
        <div className={styles.generator__imgs}>
          {giveImage.length === 0 ? (
            <div className={styles.generator__text}>Ничего не найдено!</div>
          ) : (
            giveImage.map((image) => (
              <img
                className={styles.generator__img}
                src={image.link}
                key={image.id}
                alt={`Изображение ${image.id}`}
              />
            ))
          )}
        </div>
      )}
    </section>
  );
};
