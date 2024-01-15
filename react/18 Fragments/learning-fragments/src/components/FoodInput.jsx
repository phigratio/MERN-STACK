import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter food Item here"
      className={styles.foodInput}
      // onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    />
  );
};
FoodInput.propTypes;
export default FoodInput;
