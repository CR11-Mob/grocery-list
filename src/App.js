import { useState } from "react";
import "./App.css";

import groceryItems from "./GroceryItems";
import GroceryList from "./components/groceryList";
import GroceryInput from "./components/takeGroceryInput";
import RemoveGrocery from "./components/removeGroceryList";

let removedItemArr = [];

const App = () => {
  const [productName, setName] = useState("");
  const [productPrice, setPrice] = useState("");

  const [list, setList] = useState(groceryItems);
  const [removeItemList, setRemoveItemList] = useState(removedItemArr);

  const [error, setError] = useState("");

  const addGroceryItem = () => {
    if (productName.length < 3) return;

    let newProduct = { name: productName, price: +productPrice };
    let listCopy = list.map((item) => {
      return item;
    });
    listCopy.push(newProduct);
    setList(listCopy);
    console.log(listCopy);
    setName("");
    setPrice("");
  };

  const calculateTotal = () => {
    let total = 0;
    list.map((item) => (total += item.price));
    return total;
  };

  console.log("rendered");

  return (
    <div className="container">
      <div id="grocery-list">
        <GroceryList
          list={list}
          removeItemList={removeItemList}
          setRemoveItemList={setRemoveItemList}
          calculateTotal={calculateTotal}
        />
      </div>

      <div id="input-div">
        <GroceryInput
          productName={productName}
          setName={setName}
          productPrice={productPrice}
          setPrice={setPrice}
          error={error}
          setError={setError}
          addGroceryItem={addGroceryItem}
        />
      </div>

      <div id="removedGroceries">
        <RemoveGrocery
          removeItemList={removeItemList}
          list={list}
          setList={setList}
        />
      </div>
    </div>
  );
};
export default App;
