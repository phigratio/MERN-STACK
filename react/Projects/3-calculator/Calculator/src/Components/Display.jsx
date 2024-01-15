import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      id="display"
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};
Display.propTypes;
export default Display;
