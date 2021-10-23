import { Link } from 'react-router-dom';

export default function Shops() {
  return (
    <>
      <div>shops</div>
      <div>
        <Link to="/shops/1">shop 1</Link>
      </div>
      <div>
        <Link to="/shops/2">shop 2</Link>
      </div>
      <div>
        <Link to="/shops/3">shop 3</Link>
      </div>
    </>
  );
}
