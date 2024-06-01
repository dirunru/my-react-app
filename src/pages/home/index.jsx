import styles from "./index.module.scss";
import prettyLog from "../../utils/log.js";

// 创建打印对象
const log = prettyLog();

console.log('log.success("hello world");', log);
log.success("hello world", 111);
for (const [key, fun] of Object.entries(log)) {
  log.info("key:", key, "fun", fun);
}

console.log("Object.entries(log)", Object.entries(log));
function Home() {
  return (
    <>
      <h3>grid</h3>
      <div className={styles.container}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
        <div className={styles.item}>7</div>
        <div className={styles.item}>8</div>
        <div className={styles.item}>9</div>
      </div>
    </>
  );
}
export default Home;
