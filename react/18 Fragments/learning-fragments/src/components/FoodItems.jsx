import Item from "./Item.jsx";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group-item">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log("Clicked")}
        ></Item>
      ))}
    </ul>
  );
};
FoodItems.propTypes;

export default FoodItems;
