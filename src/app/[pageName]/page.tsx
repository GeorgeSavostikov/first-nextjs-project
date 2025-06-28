import styles from "../homePage.module.css";

export default function AllPages({ params }) {
  const { pageName } = params;
  return <div className={styles.page}>{`Hmmm.... ${pageName}`}</div>;
}
