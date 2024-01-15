import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad"];
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Container>
        <Container>
          <h1 className="food-heading"> Healthy Foods</h1>
        </Container>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Above is the list of foods that are good for health.</p>
      </Container>
    </>
  );
}
export default App;
