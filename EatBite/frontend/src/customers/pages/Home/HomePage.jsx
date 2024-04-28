import React, { useEffect } from "react";
import "./HomePage.css";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import RestaurantCard from "../../components/RestarentCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../State/Customers/Restaurant/restaurant.action";
import NotFound from "../NotFound/NotFound";

const HomePage = () => {
  const { auth, restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user]);

  return (
    <div className="">
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="z-10 text-gray-30 text-10xl lg:text-6xl font-extrabold ">
            Eatbite
          </p>
          <p className="z-10 text-gray-60 text-xl lg:text-3xl">
            Satisfy your cravings with just a tap, indulge in flavors delivered
            straight to your door!
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-5 lg:py-4 lg:px-10">
        <p className="text-xl font-semibold text-gray-400 py-3 pb-10">
          WHAT'S ON YOUR MIND?
        </p>
        <MultipleItemsCarousel />
      </section>
      <section className="px-5 lg:py-4 lg:px-10">
        <p className="text-xl font-semibold text-gray-400 py-3 ">
          Top Restaurants
        </p>
        <div className="flex flex-wrap items-center justify-around ">
          {restaurant?.restaurants?.length ? (
            restaurant.restaurants.map((item, i) => (
              <RestaurantCard data={item} index={i} />
            ))
          ) : (
            <NotFound text="No restaurants found." />
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
