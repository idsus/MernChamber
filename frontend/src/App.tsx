import React from 'react';
import './styles/styles.css'; // Import the CSS file
import HomePage from './components/HomePage'; // Import the HomePage component

const App: React.FC = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
