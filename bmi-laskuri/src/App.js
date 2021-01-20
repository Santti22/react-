import './App.css';
import React, {useState} from 'react';
function App() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState(0)
    

  function getBmi(e) {
    e.preventDefault();
    let lasku = Math.round(weight / (height * height) * 10) / 10
    setBmi(lasku)
  }
  return (
    <div className="keskitys">
      <h2>Calculating body mass index</h2>
      <form onSubmit={getBmi}>
        <div>
          <label>Height</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
        </div>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <output>{bmi}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
