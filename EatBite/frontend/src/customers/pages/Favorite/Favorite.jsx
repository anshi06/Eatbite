import React, { useEffect } from "react";
import RestaurantCard from "../../components/RestarentCard/RestaurantCard";
import { useSelector } from "react-redux";

const Favorite = () => {
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    // dispatch()
  }, []);
  return (
    <>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap justify-center">
        {auth?.favorites?.length ? (
          auth.favorites?.map((item) => <RestaurantCard data={item} />)
        ) : (
          <div className="flex flex-col h-full justify-center items-center">
            <p className="text-3xl font-semibold text-amber-500">
              No favourites here 💔
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorite;
