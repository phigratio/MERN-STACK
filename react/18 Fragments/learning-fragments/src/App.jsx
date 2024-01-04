import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad"];
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }
  return (
    <>
      <h1> Healthy Foods</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>;
    </>
  );
}
export default App;
