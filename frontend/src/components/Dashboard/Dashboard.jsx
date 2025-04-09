import { useState } from 'react';

const Dashboard = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      SetIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      SetIsLoggedIn(false);
    };
  
    return (
      <div style={{ position: 'absolute', top: '10px', right: '10px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', width: '140px' }}>
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

export default Dashboard;