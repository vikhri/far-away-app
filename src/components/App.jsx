import {useState} from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

function App() {
  const [items , setItems] = useState([]);

 function HandleAddItems(item) {
    setItems((items) => [...items, item] )
  }

  function HandleDeleteItem(id) {
   setItems((items) => items.filter((item) => item.id !== id))
  }

  function HandleToggleItem(id) {
    setItems(items => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function HandleClearList() {
   const confirmed = window.confirm('Are you sure you want to delete all items?');
   if(confirmed) {setItems([])}
  }


  return (
    <div className='app'>
     <Logo />
     <Form onAddItems={HandleAddItems}/>
     <PackingList
       items={items}
       onDeleteItems={HandleDeleteItem}
       onToggleItem={HandleToggleItem}
       onClearList={HandleClearList}
     />
     <Stats items={items}/>
    </div>
  )
}


export default App
