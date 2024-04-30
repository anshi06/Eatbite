import React, { useEffect } from "react";
import "./HomePage.css";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import RestaurantCard from "../../components/RestarentCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../State/Customers/Restaurant/restaurant.action";
import NotFound from "../NotFound/NotFound";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import WhyChooseOwner from "./WhyChooseOwner";
import WhyChooseCustomer from "./WhyChooseCustomer";

const HomePage = () => {
  const { auth, restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("userhome", auth.user);

  useEffect(() => {
    if (!auth?.user || auth?.user?.role === "ROLE_CUSTOMER") {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user]);

  const handleNavigate = (e) => {
    navigate("/admin/restaurant");
  };

  if (auth?.user?.role === "ROLE_RESTAURANT_OWNER") {
    return (
      <>
        <section className="-z-50 banner relative flex flex-col justify-center items-center">
          <div className="w-[50vw] z-10 text-center space-y-6">
            <p className="z-10 text-gray-30 text-10xl lg:text-6xl font-extrabold ">
              Eatbite
            </p>
            <p className="z-10 text-gray-60 text-xl lg:text-3xl">
              Maximize your restaurant's visibility by showcasing your
              delectable dishes on our platform.
            </p>
          </div>

          <div className="cover absolute top-0 left-0 right-0"></div>
          <div className="fadout"></div>
        </section>
        <section className="flex flex-col justify-center items-center mt-10 space-y-4">
          <h2 className="text-3xl font-bold">About us</h2>
          <p className="text-gray-400 md:text-lg max-w-3xl px-9 ml-1">
            Welcome to Eatbite - your partner in culinary success! At Eatbite,
            we understand the passion and dedication that goes into crafting
            exceptional dining experiences. That's why we're committed to
            empowering restaurant owners like you to reach new heights of
            success in the ever-evolving world of food service. Our innovative
            food ordering app provides a platform for you to showcase your
            culinary creations to a wide audience of hungry diners, effortlessly
            expanding your reach and boosting your business.
          </p>
          {/* <p>
            Welcome to EatBite, your ultimate destination for culinary
            convenience! At Eatbite, we're passionate about bringing the world's
            flavors right to your fingertips. Whether you're craving comforting
            classics or daring delicacies, our user-friendly food ordering app
            connects you with a diverse array of local eateries and beloved
            restaurants. From bustling bistros to hidden gems, we've curated a
            selection of establishments to satisfy every palate and preference.
            With just a few taps, indulge in the convenience of ordering your
            favorite dishes for delivery or pickup, all within the palm of your
            hand. Join us on a journey of flavor exploration and culinary
            delight with Eatbite - where convenience meets culinary excellence."
          </p> */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleNavigate}>
            Learn more
          </Button>
        </section>

        <WhyChooseOwner />

        <Footer />
      </>
    );
  }

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
      <WhyChooseCustomer/>
      <Footer />
    </div>
  );
};

export default HomePage;
