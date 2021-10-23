import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter(props) {
  const { initial: init = 0 } = props;

  const [count, setCount] = useState(init);

  function increaseCount(i) {
    setCount(count + i);
  }

  useEffect(() => {
    console.log('counter mounted');
    return () => {
      console.log('counter dismounted');
    };
  }, []);

  return (
    <>
      <div className={styles.count}>{count}</div>
      <div className={styles.fixed_count}>{count}</div>
      <button type="button" onClick={() => increaseCount(2)}>
        increase count +
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        type="button"
        onClick={function () {
          setCount(count - 1);
        }}
      >
        decrease count -
      </button>
    </>
  );
}
