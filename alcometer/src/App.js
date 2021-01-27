import React, {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(89)
  const [bottles, setBottles] = useState(3)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  function getResult(e) {
    let savior = 0;
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burner = weight / 10
    const gramsleft = grams - (burner * time)
    e.preventDefault();

    if (gender === "male") {
      setResult(gramsleft / (weight * 0.7))
    } else {
      setResult(gramsleft / (weight * 0.6))
    }
  }

  return (
      <div className="main">
        <h2>Alcometer</h2>
        <form onSubmit={getResult}>
          <div>
            <label>Weight</label>
            <input value={weight} onChange={e => setWeight(e.target.value)}></input>
          </div>
          <div>
            <label>Bottles</label>
            <input type={Number} value={bottles} onChange={e => setBottles(e.target.value)}></input>
          </div>
          <div>
            <label>Time</label>
            <input type={Number} value={time} onChange={e => setTime(e.target.value)}></input>
          </div>
          <div>
            <label>Gender</label>
            <label><input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>Male</label>
            <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>Female</label>
          </div>
          <div>
            <output>{result.toFixed(2)}</output>
          </div>
          <div>
            <button>Calculate</button>
          </div>
        </form>
      </div>
  );
}

export default App;
