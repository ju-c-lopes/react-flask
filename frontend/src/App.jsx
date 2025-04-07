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

  const GrowMeUp = () => {
    setCount(count + 1);
  }

  const ShrinkMeDown = () => {
    setCount(count - 1);
  }

  const ResetMe = () => {
    setCount(0);
  }

  return (
    <div>
      <p>{props.name} has been clicked {count} times</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={GrowMeUp}>Grow me up</button>
        <button onClick={ShrinkMeDown}>Shrink me down</button>
        <button onClick={ResetMe}>Reset me</button>
      </div>
    </div>
  )
}

const Dashboard = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const handleLogin = () => {
    SetIsLoggedIn(true);
  };

  const handleLogout = () => {
    SetIsLoggedIn(false);
  };

  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px', padding: '10px' }}>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {isLoggedIn && <p>Hey friend, Welcome!</p>}
      {!isLoggedIn && <p>Please log in to continue.</p>}
    </div>
  );
};

function App() {

  return (
    <>
      <h1>Speaker Profile</h1>
      <Dashboard />
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
