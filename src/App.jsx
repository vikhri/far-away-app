import * as PropTypes from "prop-types";
import {useState} from "react";

function App() {
  const [items , setItems] = useState([]);
 function HandleAddItems(item) {
    setItems((items) => [...items, item] )
  }

  function HandleDeleteItem(id) {
   setItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className='app'>
     <Logo />
     <Form onAddItems={HandleAddItems}/>
     <PackingList items={items} onDeleteItems={HandleDeleteItem}/>
     <Stats />
    </div>
  )
}

function Logo() {
  return <h1>Far Away</h1>
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity , setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;

    const newItem = { description , quantity , packed: false, id:Date.now()};
    console.log(newItem)

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={
        (e) => setQuantity(Number(e.target.value))
      }>
        {Array.from({length: 20}, (_, i) => i + 1)
          .map(num => <option value={num} key={num} > {num} </option>)}
      </select>
      <input type='text' placeholder='item' value={description} onChange={(e) => setDescription(e.target.value) }/>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItems }) {
  return (
  <div className="list">
    <ul>
    {
      items.map((item) => (
        <Item item={item} key={item.id} onDeleteItems={onDeleteItems}/>))
    }
  </ul>
  </div>
  )
}

function Item({ item, onDeleteItems }) {
  return <li>
    <span style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.quantity}{' '}{item.description}</span>
    <button
    onClick={() => onDeleteItems(item.id)}
    >❌</button>
  </li>
}

function Stats() {
  return (
    <footer className='stats'>
    You have X items on your list, and you already packed Y (X%)
  </footer>
  )
}



export default App
