import { useState } from "react";
// import styled from "styled-components";

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// interface ListItemProps {
//   active: boolean;
// }

// const ListItem = styled.li<ListItemProps>`
//   padding: 5px 0;
//   background: ${(props) => (props.active ? "lightblue" : "white")};
// `;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group" style={{ backgroundColor: "yellow" }}>
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List> */}
    </>
  );
}

export default ListGroup;
