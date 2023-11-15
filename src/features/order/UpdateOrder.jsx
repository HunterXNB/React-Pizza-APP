import React from 'react';
import Button from '../../UI/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';
export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderID, data);

  return null;
}
