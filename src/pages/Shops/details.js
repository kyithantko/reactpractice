import { useParams } from 'react-router-dom';

export default function ShopDetails() {
  const { shopId } = useParams();

  return (
    <>
      <div>this is shop {shopId}</div>
    </>
  );
}
