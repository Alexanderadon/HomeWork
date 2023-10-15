import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../Paths/index";
import styles from "../ui/index.module.scss";
import logo from "../images/logo.png";
import arrow from "../images/arrow.png";

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const ToggleLectureOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav_item}>
          <li>
            <Link to={Paths.home}>Main</Link>
          </li>
          <li
            onClick={ToggleLectureOpen}
            className={`${styles.header__nav_li} ${
              isOpen ? styles["openLecture"] : ""
            }`}
          >
            <span>Lecture</span>
            <img
              className={`${styles.header__img} ${
                isOpen ? styles["openLectureImg"] : ""
              }`}
              src={arrow}
              alt="image"
            />
            {isOpen && (
              <div
                className={`${styles.header__nav_subnav} ${
                  isOpen ? styles["openLecture"] : ""
                }`}
              >
                <ul className={styles.subnav}>
                  <li>
                    <Link to={Paths.lectureOne}>Lecture one</Link>
                  </li>
                  <li>
                    <Link to={Paths.lectureTwo}>Lecture two </Link>
                  </li>
                  <li>
                    <Link to={Paths.quiz}>Quiz 09.10.2023</Link>
                  </li>
                  <li>
                    <Link to={Paths.generatorAi}>Generator.AI</Link>
                  </li>
                  <li>
                    <Link to={Paths.lectureFive}>Lecture five</Link>
                  </li>
                  <li>
                    <Link to={Paths.lectureSix}>Lecture six</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        <ul className={styles.header__nav_item}>
          <li>
            <Link className={styles.header__nav_logo} to={"/"}>
              <img src={logo} alt="logo" />
              Basics webs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
