import { useState } from "react";

// Some people prefer to call it "interface ListGroupProps {}"
interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  let items = ["London", "Paris", "New York", "Tokyo"];
  // Hook
  //   const arr = useState(-1);
  //   arr[0]; // variable (selectedItem)
  //   arr[1]; // updater function (setSelectedItem)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
