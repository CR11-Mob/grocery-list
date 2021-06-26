export default function GroceryInput(props) {
  const {
    productName,
    productPrice,
    setName,
    setPrice,
    error,
    setError,
    addGroceryItem,
  } = props;
  return (
    <>
      <input
        id="product-name"
        type="text"
        value={productName}
        placeholder="Product Name"
        onChange={(e) => {
          if (e.target.value.length < 3) {
            console.log("less than three");
            setError(true);
          } else {
            setError(false);
          }
          setName(e.target.value);
        }}
      />

      <input
        id="product-price"
        type="number"
        value={productPrice}
        placeholder="Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      {error ? "Pleasze enter more than 3 letters" : ""}
      <button onClick={addGroceryItem}>Add Grocery</button>
    </>
  );
}
