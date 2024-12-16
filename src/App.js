import { useRef } from 'react';
import './App.css';
import Video from './video';

function App() {
  const videoRef = useRef()
  const handleStart = () => {
    videoRef.current.play()
    console.log(videoRef.current)
  }
  const handleStop = () => {
    videoRef.current.pause()
  }
  return (
    <div className="App">
      <Video ref={videoRef}/>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
