import {useState} from 'react';
import Child from './components/Child.jsx';

function App() {
  const [showChild, setShowChild] = useState(true);
  return (
    <div>
      <h1>Use Effect | Ciclo de vida de los componentes</h1>
      <button onClick={() => setShowChild(!showChild)}>Toggle Child</button>
      {showChild && <Child></Child>}
    </div>
  );
}

export default App;