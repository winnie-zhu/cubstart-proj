import { useState } from 'react';
import './App.css';
import { ColorButton } from './components/ColorButton/ColorButton';
import { Icon } from '@iconify/react';
import { Trash } from './components/Trash/Trash';

function App() {
  // const [color, setColor] = useState("black");

  return (
    <div className="App">
      <ul>
        <ColorButton n="0" color="#2E2E2E"/>
        <ColorButton n="1" color="white"/>
        <ColorButton n="2" color="#FFA8A8"/>
        <ColorButton n="3" color="#FFCCA8"/>
        <ColorButton n="4" color="#FFF0A1"/>
        <ColorButton n="5" color="#9AE8A7"/>
        <ColorButton n="6" color="#A8D5FF"/>
        <ColorButton n="7" color="#BFA8FF"/>
        <Trash />
      </ul>
      
    </div>
  );
}

export default App;
