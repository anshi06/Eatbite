import React, { useEffect } from "react";
import OrderCard from "../../components/Order/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOrders } from "../../../State/Customers/Orders/Action";

const Orders = () => {
  const { order, auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getUsersOrders(jwt));
  }, [auth.jwt]);
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {order?.orders?.length ? (
          order.orders.map((order) =>
            order.items.map((item) => (
              <OrderCard status={order.orderStatus} order={item} />
            ))
          )
        ) : (
          <div className="flex flex-col h-full justify-center items-center">
            <p className="text-3xl font-semibold text-amber-500">
              No orders yet 👀
            </p>
            <p>Looks like you haven't made your choice yet...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
