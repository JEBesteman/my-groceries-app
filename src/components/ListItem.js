import React from "react";

const ListItem = ({ item, clickItem, readonly }) => {
  return (
    <li
      key={item.id}
      className="list-item"
      onClick={clickItem}
      value={item.title}
    >
      <span>{item.title || ""}</span>
      <span>{readonly ? `Hoeveelheid: ${item.amount}` : ""}</span>
    </li>
  );
};

export default ListItem;
