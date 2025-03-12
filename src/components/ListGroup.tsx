import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelecItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelecItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); //Hook

  return (
    <>
      <h1> {heading} </h1>
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
              onSelecItem(item);
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
