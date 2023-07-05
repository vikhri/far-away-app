import {useState} from "react";
import Item from "./Item.jsx";

export default function PackingList({items, onDeleteItems, onToggleItem, onClearList}) {

  const [Sorting, setSorting] = useState('input')
  let sortedItems;

  if (Sorting === 'input') sortedItems = items;

  if (Sorting === 'description') {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  }

  if (Sorting === 'packed') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  return (
    <div className="list">
      <ul>
        {
          sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItems={onToggleItem}/>))
        }
      </ul>
      <div className='actions'>
        <select value={Sorting} onChange={(e) => setSorting(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>
          Clear list
        </button>
      </div>

    </div>
  )
}