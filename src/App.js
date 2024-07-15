import logo from './logo.svg';
import './App.css';
import {useState} from "react"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn //         </a>
//       </header>
//     </div>
//   );
// }

function Counter() {
  const [counter, setCounter] = useState(0);
  // console.log(data);
  function upCounter() {
      setCounter(counter + 1);
  }
  return (
      <div>
          <h1>count: {counter}</h1>
          <button onClick={upCounter}>클릭!</button>
      </div>
  )
}
function CustomInput() {
  const [customInput, setOutput] = useState("");
  // console.log(data);
  function inputUpdate(event) {
      setOutput(() => event.target.value);
  }
  return (
      <div>
          <label htmlFor="custom">사용자 입력: </label>
          <input id="custom" type="text" onChange={inputUpdate} /><br />
          <h3>사용자 입력: {customInput}</h3>
      </div>
  )
}
function TimeApp() {
  const [hour, setHour] = useState(0);
  const [second, setSecond] = useState(0);
  const [isHour, setIsHour] = useState(true);
  function updateHour(e) {
      setSecond(() => e.target.value * 3600);
      setHour(() => e.target.value);
  }
  function updateSecond(e) {
      setHour(() => Math.round(e.target.value / 36) / 100);
      setSecond(() => e.target.value);
  }
  function click() {
      setIsHour(() => !isHour);
  }

  return (
      <div>
          <label htmlFor="hour">시간: </label>
          <input
              type="number"
              id="hour"
              value={hour}
              onChange={updateHour}
              disabled={!isHour}

          /><br />
          <label htmlFor="second">초: </label>
          <input type="number" id="second"
              value={second}
              onChange={updateSecond}
              disabled={isHour}
          />
          <button onClick={click}>기능 전환</button>
      </div >
  )
}



function App() {
  const [idx, setIdx] = useState("0");
  function onSelect(e) {
      setIdx(() => e.target.value);
  }
  return (
      <div>
          <h1>앱 선택하기</h1>
          <select value={idx} onChange={onSelect}>
              <option value="0">카운터</option>
              <option value="1">입력 따라하기</option>
              <option value="2">시간 계산하기</option>
          </select>
          {idx === "0" ? <Counter /> : null}
          {idx === "1" ? <CustomInput /> : null}
          {idx === "2" ? <TimeApp /> : null}

      </div >
  )
}


export default App;
