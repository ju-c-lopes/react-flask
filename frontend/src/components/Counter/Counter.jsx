import { useState } from 'react';


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
  
export default Counter;
