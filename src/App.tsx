import React, { useState } from 'react';
import Colors from './components/Colors';
import './App.css';

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  return (
    <div className="app" style={{ backgroundColor }}>
      <Colors onColorChange={setBackgroundColor} />
    </div>
  );
}

export default App;
