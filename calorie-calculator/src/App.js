import { useState } from 'react'
import './App.css';

function App() {
  const [weight, setWeight] = useState(90)
  const [intensity, setIntensity] = useState(1.3)
  const [gender, setGender] = useState("male")
  const [calories, setCalories] = useState(0)

  function handleSubmit(e) {
    let E = 0;
    e.preventDefault();
    if (gender === "male") {
      E = (879 + 10.2 * weight) * intensity
    } else {
      E = (795 + 7.18 * weight) * intensity
    }
    setCalories(E)
  }
  return (
    <div className="main">
      <h3>Calorie-calculator</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input type={Number} value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Activity</label>
          <select name="activity" value={intensity} onChange={e => setIntensity(e.target.value)}>
            <option value="1.3">light</option>
            <option value="1.5">usual</option>
            <option value="1.7">moderate</option>
            <option value="2">hard</option>
            <option value="2.2">very hard</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <label><input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>Male</label>
          <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>Female</label>
        </div>
        <div>
          <p>Calorie consumption: {calories.toFixed(0)}</p>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
