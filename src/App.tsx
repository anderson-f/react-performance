import { useMemo, useState } from "react";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('')

  function addItemToList() {
    setItems([...items, `Item ${items.length}`])
  }

  // contagem se repete a cada renderização do componente
  // const countItemsWithOne = items.filter(item => item.includes('1')).length
  // console.log('item calculado', countItemsWithOne)

  const countItemsWithOne = useMemo(()=> {
    console.log('item calculado') // só executa quando o valor de items muda
    return items.filter(item => item.includes('1')).length
  },[items])

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem}/>
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => {
          return <Item key={item} title={item} />
        })}
      </ul>
      <div>
        Contagem: {countItemsWithOne}
      </div>
    </div>
  )
}

export default App;
