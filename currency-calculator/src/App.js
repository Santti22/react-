import './App.css';
import {useState} from 'react'

function App() {
    const [eur, setEur] = useState(0)
    const [gbp, setGbp] = useState(0)

    function handleSubmit(e) {
      e.preventDefault();
      const conversion = eur * 0.9;
      setGbp(conversion);
    }
  return (
    <div className="container">
      <h3>Converser eur to gbp</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Eur</label>
          <input type="number" value={eur} onChange={e => setEur(e.target.value)}></input>
        </div>
        <div>
          <label>Gbp</label>
          <output>{gbp}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
