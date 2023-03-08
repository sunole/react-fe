import './App.css';
import { useState } from 'react';
import { BACKEND_URL } from './enviroment';
import Html5QrcodePlugin from './Html5QrcodePlugin';

function App() {
  // const [barCodeNumber, setBarCodeNumber] = useState("");
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  const url = BACKEND_URL + "items/" 
  const urlget = BACKEND_URL + "items/" 
  // console.log(url)
  const getAllItems = () => {
    fetch(url)
    .then(res => {
      if (!res.ok) {
        return Error("Oh no");
      }
      return res.json();
    })
    .then(data => setItems(data))
  }
  const getItem = (barCodeNumber) => {
    fetch(urlget.concat(barCodeNumber))
    .then(res => {
      if (!res.ok) {
        return Error("Oh no");
      }
      return res.json();
    })
    .then(data => setItem(data))
  }
  
  const onNewScanResult = (decodedText, decodedResult) => {
    getItem(decodedText)


  };
  return (
    <div className="App">
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <h1> Scanned item is: {item?.BarCodeNumber}, {item?.Name}, {item?.Description}, {item?.Response} </h1>
      <button onClick={() => getAllItems()}> get all items</button>
      <h1> All Items are:</h1>
      {items?.map((item) => (
        <div key={item._id}>
          <div>{item.BarCodeNumber}</div>
          <div>{item.Name}</div>
          <div>{item.Description}</div>
          <div>{item.Response}</div>
        </div>
      ))}
    </div>
  );
}
export default App