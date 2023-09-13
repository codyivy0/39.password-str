import "./App.css";
import { useState } from "react";

function App() { 
const [password, setPassword] = useState('')


function handleChange(e) {
  const background = document.getElementById('background')
  const newPassword = e.target.value
  setPassword(newPassword)
  const length = newPassword.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
}


  return (
    <div className="App xl:bg-transparent " >
      <div  className="background " id="background"></div>
      <div
        className="bg-white rounded p-10 text-center shadow-md"
        id="container"
      >
        <h1 className="text-3xl">Image Password Strength</h1>
        <p className="text-sm text-gray-700">
          Change the password to see the effect
        </p>
        <div className="my-4 text-left">
          <label htmlFor="email" className="text-gray-900">
            Email:
          </label>
          <input
            type="text"
            className="border block w-full p-2 mt-2 rounded"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="my-4 text-left">
          <label htmlFor="email" className="text-gray-900">
            Password:
          </label>
          <input
            onChange={handleChange}
            type="password"
            className="border block w-full p-2 mt-2 rounded"
            id="password"
            value={password}
            placeholder="Enter password"
          />
        </div>
        <button
          className="bg-black text-white py-2 mt-4 inline-block w-full rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
