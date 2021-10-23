import { useState } from 'react';

const TodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  console.log(list);

  return (
    <>
      <div>
        <div className="titletext">To-do List</div>
        <input
          type="text"
          style={{ width: 300, marginLeft: 10 }}
          placeholder="I need to... "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setList([...list, { text: text, done: false }])}
        >
          Submit
        </button>
      </div>
      <br />
      {list.map((l, index) => (
        <div
          style={{
            width: 300,
            marginLeft: 10,
            backgroundColor: 'pink',
            border: '2px solid black',
          }}
          key={index}
        >
          <p>{l.text}</p>
          <input
            type="checkbox"
            checked={l.done}
            onChange={(e) => {
              let a = list;
              a[index] = { text: l.text, done: e.target.checked };
              setList([...a]);
            }}
          />
          <label>done</label>
        </div>
      ))}
    </>
  );
};

export default TodoList;
