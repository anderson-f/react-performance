import { useMemo, useState, useCallback } from "react";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  const addItemToWishlist = useCallback((item: string) => {
    setWishlist((state) => [...state, item]);
  }, []);

  const countItemsWithOne = useMemo(() => {
    console.log("item calculado"); // só executa quando o valor de items muda
    return items.filter((item) => item.includes("1")).length;
  }, [items]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <Item key={item} onAddToWishlist={addItemToWishlist} title={item} />
          );
        })}
      </ul>
      <div>Contagem: {countItemsWithOne}</div>
    </div>
  );
}

export default App;
