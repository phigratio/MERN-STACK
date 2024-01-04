import styles from "./ButtonsContainer.module.css";

const ButtonNames = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

const ButtonsContainer = () => {
  return (
    <div id="buttons-container" className={styles.buttonsContainer}>
      {ButtonNames.map((buttonName) => (
        <button key="" className={styles.button}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};
ButtonsContainer.propTypes;
export default ButtonsContainer;
