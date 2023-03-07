import './App.css';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from './enviroment';

function App() {
  const [items, setItems] = useState([]);
  const url = BACKEND_URL + "items/" 
  console.log(url)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then(data => setItems(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(items)
  return (
    <div className="App">
      <h1>Items</h1>
      <h2>...are here</h2>

      {items.map(item => (
        <div key={item._id}>
        <div>{item.BarCodeNumber}</div>
        <div >{item.Name}</div>
        <div >{item.Description}</div>
        <div >{item.Response}</div>
        </div>
      ))}
    </div>
  );
}
export default App