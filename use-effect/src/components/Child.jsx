import {useEffect, useState} from 'react';
import '../styles/child.css';

export default function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Se montó el componente');
    return () => {
      console.log('Se desmontó el componente');
    };
  }, [count]);

  return (
    <div className="child">
        <h2> Este es un componente hijo</h2>
        <h3>Contador: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}