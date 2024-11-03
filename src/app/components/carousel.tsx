"use client";
import { useState } from "react";
import Link from "next/link";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11",
      items: [
        {
          icon: "🏝️",
          title: "TRIP PLANNER",
          description: "Susun Rute Perjalananmu Sendiri",
        },
        {
          icon: "🧭",
          title: "Guide",
          description: "Tour Guide berbahasa Indonesia",
        },
        {
          icon: "🗺️",
          title: "Info",
          description: "Info penting di luar negeri",
        },
      ],
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692364277swiss%202%20(1)-min.JPG?alt=media&token=e4b0843f-875b-4bbe-b8bc-642318848bca",
      content: (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex-col w-5/6 justify-center items-center ">
            <div className="flex flex-col justify-center items-center space-y-5">
              <div className="space-y-5 tracking-widest flex flex-col justify-center ml-10 mt-10">
                <Link
                  href={"/"}
                  className="text-lg space-y-3 flex-col items-center"
                >
                  <div className="text-center space-y-2">
                    <p className="text-lg text-gray-400">
                      EKSPLOR DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DENGAN
                    </p>
                    <p className="font-bold text-center text-4xl">
                      Aplikasi GetGoing
                    </p>
                    <p className="text-gray-400">DAPAT DIDOWNLOAD DI :</p>
                  </div>
                  <div className="flex space-x-2 justify-center ">
                    <div className="px-2 py-2 bg-black text-white rounded-lg">
                      <h1>logo playstore</h1>
                    </div>
                    <div className="px-2 py-2 bg-black text-white rounded-lg">
                      <h1>logo appstore</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-5/6 flex">
        {/* button kiri */}
        <div className="absolute left-2 top-1/2 h-1/3 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="text-5xl font-bold text-red-600 px-2 py-1 rounded-full"
          >
            <SlArrowLeft />
          </button>
        </div>

        {/* Image Carousel */}
        <div className="w-1/2 h-96 flex items-center justify-center">
          <img
            src={slides[currentSlide].image}
            alt="image-carousel"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        {/* Text Carousel */}
        <div className="w-1/2 h-96 flex justify-center">
          {slides[currentSlide].items ? (
            <div className="flex flex-col w-5/6 justify-center items-center">
              <h1 className="text-xl tracking-widest text-gray-400 text-center">
                APA YANG GET GOING PUNYA ?
              </h1>
              <div className="space-y-5 flex flex-col justify-center ml-10 mt-10">
                {slides[currentSlide].items.map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="text-lg space-y-3 flex items-center space-x-3 hover:-translate-y-3 transition duration-500"
                  >
                    <div className="bg-gray-100 p-2 rounded-full">
                      <p className="text-4xl">{item.icon}</p>
                    </div>
                    <div>
                      <p className="rounded-full px-2">{item.title}</p>
                      <p className="bg-gray-100 rounded-full px-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            slides[currentSlide].content
          )}
        </div>

        {/* button kanan */}
        <div className="absolute right-2 top-1/2 h-1/3 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className="text-5xl font-bold text-red-600 px-2 py-1 rounded-full"
          >
            <SlArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
