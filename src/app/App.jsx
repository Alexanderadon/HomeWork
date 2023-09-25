import { Layout } from "../shared/components/layout/index";
import styles from "../app/ui/index.module.scss";
import "../app/styles/global.scss";

export const App = () => {
  return (
    <Layout>
      <div className={styles.wrap}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>
      <main className={styles.main}>
        <section>
          <div className={styles.main__conteiner}>
            <h1 className={styles.main__conteiner_title}>Home works.</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
};
