import styles from "./item.module.css";
const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className={`${styles["muqtu-item"]} "list-group-item"`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
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
