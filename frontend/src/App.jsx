import './App.css';
import ContextExample from './components/ContextExample/ContextExample.jsx';
import Counter from './components/Counter/Counter.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import DeliverData from './components/DeliverData/DeliverData.jsx';
import SearchSpeaker from './components/SearchSpeaker/SearchSpeaker.jsx';

import PropTypes from 'prop-types';

function SpeakerProfile(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>Position: {props.position}</p>
      <p>Company: {props.company}</p>
    </>
  )
}

SpeakerProfile.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
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
      <DeliverData />
      <h2>Counter:</h2>
      <Counter name="Counter" />
      <h2>Context Example:</h2>
      <ContextExample />
    </>
  )
}

export default App
