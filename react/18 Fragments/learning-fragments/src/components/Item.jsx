import styles from "./item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`list-group-item ${styles["muqtu-item"]} ${
        bought ? "active" : ""
      }`}
      aria-current="true"
    >
      <span className={styles["muqtu-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
Item.propTypes;

export default Item;
