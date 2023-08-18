import React, { useState } from 'react';

const Colors: React.FC<{ onColorChange: (color: string) => void }> = ({ onColorChange }) => {
  const [RGB, setRgbState] = useState('');
  
  const checkNums = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length < 7) return;
    const colorRegex = /^#([A-Fa-f0-9]{6})$/;
    if (colorRegex.test(value)) {
      hexToRgb(value);
    } else {
      error();
    }
  }

  const hexToRgb = (hex: string) => {
    hex = hex.replace(/^#/, '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setRgbState(rgbColor);
    onColorChange(rgbColor);
  }

  const error = () => {
    setRgbState('Error!');
    onColorChange('red');
  }

  return (
    <div className="container">
      <div>
        <input
          defaultValue="#"
          onChange={(event) => checkNums(event)}
        ></input>
        <div className="rgb">{RGB}</div>
      </div>
    </div>
  );
}

export default Colors;
