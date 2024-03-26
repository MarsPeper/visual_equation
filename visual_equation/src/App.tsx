import React from 'react';
import { useRete } from 'rete-react-plugin';
import logo from './logo.svg';
import './App.css';
import './rete.css';
import EditableMathField from './components/EditableMathExample'
import DesmoAPI from './components/DesmoAPI'


import { createEditor } from './rete';
function App() {
  const [ref] = useRete(createEditor)

  console.log("Hello")

  return (
    <div className="App">

      <header className="App-header">
        Visual Equation API Integration
      </header>

      <div ref={ref} style={{ height: "50vh", width: "100vw" }}></div>
      <EditableMathField />
      <div id="calculator" style={{ width: "600px", height: "600px"}}></div>
      <DesmoAPI />
    </div>
  );
}

export default App
