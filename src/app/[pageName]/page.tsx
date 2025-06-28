import { getCorrectNamePage, PageKeys } from "../utils/getCorrectNamePage";
import styles from "../homePage.module.css";

export default async function AllPages({
  params,
}: {
  params: Promise<{ pageName: PageKeys }>;
}) {
  const { pageName } = await params;

  return <div className={styles.page}>{getCorrectNamePage(pageName)}</div>;
}
