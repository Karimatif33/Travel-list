import { useState } from "react";
import Item from "./App"


export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteAllItem
  
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div
        className="actions"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <select>
          <option value="input"> Sort y input order </option>
          <option value="description"> Sort y input description </option>
          <option value="packed"> Sort y input packed </option>
        </select>
        <button onClick={() => onDeleteAllItem(sortedItems)}>Clear List</button>
      </div>
    </div>
  );


}
