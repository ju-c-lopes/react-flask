import './App.css';
import { useEffect, useState } from 'react';
import Counter from './components/Counter/Counter.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import SearchSpeaker from './components/SearchSpeaker/SearchSpeaker.jsx';

function SpeakerProfile(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>Position: {props.position}</p>
      <p>Company: {props.company}</p>
    </>
  )
}

const DeliverData = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const API_URL = 'https://dummyjson.com/users';
  
    const fetchSpeakers = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json();
        setData(data.users);
      } catch (error) {
        console.log("error", error);
      }
    }
    
    fetchSpeakers();
  }, [data]);

  return (
    <ul>
      {data.map(item  => (
        <li key={item.id}>
          {item.firstName} {item.lastName}
        </li>
      ))}
    </ul>
  )
}

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
      <DeliverData />
      <h2>Counter:</h2>
      <Counter name="Counter" />
    </>
  )
}

export default App
