import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad"];
  let textStateArr = useState("Food Item Entered By User");
  let textStateVal = textStateArr[0];
  let setTextState = textStateArr[1];
  console.log(`Current Value of TextState:${textStateVal}`);
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading"> Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textStateVal}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above is the list of foods that are good for health.</p>
      </Container> */}
    </>
  );
}
export default App;
