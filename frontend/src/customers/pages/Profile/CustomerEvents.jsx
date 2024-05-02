import React, { useEffect } from "react";
import { getAllEvents } from "../../../State/Customers/Restaurant/restaurant.action";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../../../Admin/Events/EventCard";

const CustomerEvents = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const { restaurant, auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllEvents({ jwt }));
  }, [auth.jwt]);
  return (
    <>
      {restaurant?.events?.length ? (
        <div className="mt-5 px-5 flex flex-wrap gap-5">
          {restaurant.events.map((item) => (
            <EventCard isCustomer={true} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col h-full justify-center items-center">
          <p className="text-3xl font-semibold text-amber-500">
            No Event found 😞
          </p>
        </div>
      )}
    </>
  );
};

export default CustomerEvents;
