import { useState } from 'react';
import Counter from './components/Counter';
// import CountryList from './components/CountryList';
import CountryListHook from './components/CountryListHook';
import TodoList from './components/TodoList';
// import './App.css';

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const n = '';

  return (
    <>
      {/* <button type="button" onClick={() => setShowCounter(!showCounter)}>
        toggle counter
      </button>
      {n || (showCounter && <Counter />)} */}
      {/* <CountryListHook /> */}
      <TodoList />
    </>
  );
}

export default App;
