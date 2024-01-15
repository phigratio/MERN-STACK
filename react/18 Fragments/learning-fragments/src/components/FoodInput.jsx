import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter food Item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};
FoodInput.propTypes;
export default FoodInput;
