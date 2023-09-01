import { useRef } from 'react';
import './App.css';
import SliderContainer from './components/SliderContainer'

function App() {
  const appRef = useRef(null);
  return (
    <div ref={appRef} className="App">
      <SliderContainer appRef={appRef}/>
    </div>
  );
}

export default App;
