export default function GroceryList(props) {
  const { list, removeItemList, setRemoveItemList, calculateTotal } = props;
  return (
    <>
      <table id="grocery-table">
        <thead className="table-head">
          <tr>
            <td>SL No.</td>
            <td>Product Name</td>
            <td>Product Price</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {list.map((item, index) => (
            <tr id={`row-${index}`}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="table-footer">
          <tr>
            <td></td>
            <td>Total</td>
            <td>{calculateTotal()}</td>
          </tr>
        </tfoot>
      </table>
      <span id="remove-buttons">
        {list.map((item, index) => (
          <button
            id={`btn-${index}`}
            onClick={() => {
              let removedItem = list.splice(index, 1);
              console.log(removedItem);

              let removeArrCopy = removeItemList.map((item) => item);

              let removeArrObj = { name: item.name, price: item.price };
              removeArrCopy.push(removeArrObj);
              console.log(removeArrCopy);
              setRemoveItemList(removeArrCopy);
            }}
          >
            X
          </button>
        ))}
      </span>
    </>
  );
}
