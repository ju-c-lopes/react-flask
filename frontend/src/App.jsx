import './App.css'
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
    </>
  )
}

export default App
