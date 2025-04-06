import './App.css'
import React, { useState } from 'react';
import SearchSpeaker from './SearchSpeaker/SearchSpeaker.jsx';

function SpeakerProfile(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>Position: {props.position}</p>
      <p>Company: {props.company}</p>
    </>
  )
}

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{props.name} has been clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Grow me up</button>
    </div>
  )
}

function App() {

  return (
    <>
      <h1>Speaker Profile</h1>
      <SpeakerProfile
        name="John Doe"
        position="Software Engineer"
        company="Tech Corp"
      />
      <SearchSpeaker />
      <h2>Counter:</h2>
      <Counter name="Counter" />
    </>
  )
}

export default App
