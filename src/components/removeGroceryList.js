export default function RemoveGrocery(props) {
  const { removeItemList, list, setList } = props;
  return (
    <>
      <table id="removed-grocery-table">
        <thead className="table-head">
          <tr>
            <td>SL No.</td>
            <td>Product Name</td>
            <td>Product Price</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {removeItemList.map((item, index) => (
            <tr id={`row-${index}`}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <span id="addItem-buttons">
        {removeItemList.map((item, index) => (
          <button
            id={`add-btn-${index}`}
            onClick={() => {
              let removedItem = removeItemList.splice(index, 1);
              console.log(removedItem);
              let addArrObj = { name: item.name, price: item.price };
              console.log(addArrObj);

              let addArrCopy = list.map((item) => item);

              addArrCopy.push(addArrObj);

              setList(addArrCopy);
            }}
          >
            Add
          </button>
        ))}
      </span>
    </>
  );
}
