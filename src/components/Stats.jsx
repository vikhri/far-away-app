export default function Stats({items}) {
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentPacked = Math.round(numPacked / numItems * 100);


  return (
    <footer className='stats'>
      {percentPacked === 100
        ? <p>You got everything! Ready to go!</p>
        : (numItems === 0) ? <p>Add something to the list</p> :
          <p>You have {numItems} items on your list, and you already packed {numPacked} ({percentPacked}%)</p>
      }
    </footer>
  )
}