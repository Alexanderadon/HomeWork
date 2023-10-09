import React from "react";
import styles from "../module/index.module.scss";

export const LectureOneContent = () => {
  return (
    <main className={styles.LectureOneContent}>
      <h1 className={styles.CatPhotoApp}>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <p>
          See more{" "}
          <a target="_blank" href="/">
            cat photos
          </a>{" "}
          in our gallery.
        </p>
        <a href="/">
          <img
            src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
            alt="A cute orange cat lying on its back."
          />
        </a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img
            src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"
            alt="A slice of lasagna on a plate."
          />
          <figcaption>
            Cats <em>love</em> lasagna.
          </figcaption>
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <figure>
          <img
            src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
            alt="Five cats looking around a field."
          />
          <figcaption>
            Cats <strong>hate</strong> other cats.
          </figcaption>
        </figure>
      </section>
      <section>
      <h2>Cat Form</h2>
      <form>
        <fieldset>
          <legend>Is your cat an indoor or outdoor cat?</legend>
          <label>
            <input
              id="indoor"
              type="radio"
              name="indoor-outdoor"
              value="indoor"
              checked
            />{" "}
            Indoor
          </label>
          <label>
            <input
              id="outdoor"
              type="radio"
              name="indoor-outdoor"
              value="outdoor"
            />{" "}
            Outdoor
          </label>
        </fieldset>
        <fieldset>
          <legend>What's your cat's personality?</legend>
          <label htmlFor="loving">
            <input
              id="loving"
              type="checkbox"
              name="personality"
              value="loving"
              checked
            />{" "}
            Loving
          </label>
          <label htmlFor="lazy">
            <input
              id="lazy"
              type="checkbox"
              name="personality"
              value="lazy"
            />{" "}
            Lazy
          </label>
          <label htmlFor="energetic">
            <input
              id="energetic"
              type="checkbox"
              name="personality"
              value="energetic"
            />{" "}
            Energetic
          </label>
        </fieldset>
        <input
          type="text"
          name="catphotourl"
          placeholder="cat photo URL"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
    </main>
  );
};
