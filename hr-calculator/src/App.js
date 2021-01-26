import './App.css';
import { useState } from 'react'

function App() {
  const [age, setAge] = useState(0)
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    const converse = (220 - age)
    setLower(Math.round(converse * 0.65))
    setUpper(Math.round(converse * 0.85))
  }
  return (
    <div className="main">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Age</label>
          </div>
          <div>
            <input type="number" vlue={age} onChange={e => setAge(e.target.value)}></input>
          </div>
        </div>
        <div>
          <div>
            <label>Heart rate limits</label>
          </div>
          <div>
            <output>{lower} - {upper}</output>
          </div>
          <div>
            <button>Laske</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;