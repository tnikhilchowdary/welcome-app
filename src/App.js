import './App.css';
import { useState } from 'react';

function App() {
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = () => {
    setSubscribe(!subscribe);
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <p>Thank you! Happy Learning</p>
      <button onClick={handleSubmit}>{subscribe ? "subscribed" : "subscribe"}</button>
    </div>
  );
}

export default App;

