import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../../public/assets/Icon/stars.svg";
import ArrowBack from "../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../public/assets/Icon/eva_arrow-next-fill.svg";
import { EventFactory } from "../../contracts/types";


const AvailableTickets = ({
  account,
  contract
}
) => {

  var availableTickets = [
    {
      name: "X Festival",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      price: "10$",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "Y Festival",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      price: "10$",

      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "Z Festival",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      price: "10$",

      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "X Konzert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      price: "10$",

      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "Y Konzert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      price: "10$",

      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "Z Konzert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      price: "10$",

      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
  ]
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {availableTickets.map((availableTickets, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={availableTickets.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {availableTickets.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {availableTickets.city},{availableTickets.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{availableTickets.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{availableTickets.testimoni}”.</p>

              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                  Free
                </p> */}
                <div className="flex items-stretch justify-center">
                  <div className="mb-3 xl:w-96">
                    <input
                      type="number"
                      className="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                      id="exampleNumber0"
                      placeholder="Tickets"
                    />
                  </div>
                  <div className="py-1.5 pl-1">{availableTickets.price}</div>
                  <div className="px-3">
                    {typeof account == "string" ? <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">Kaufen</button> : <button className="border border-gray-400 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">Connect Wallet</button>}


                    {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                      Button
                    </button> */}
                  </div>
                </div>

              </div>

            </div>

          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>

    </>
  );
};

export default AvailableTickets;
