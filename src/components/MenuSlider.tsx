"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { CreditCard, Flame, ShoppingCart } from "lucide-react";
import "@/styles/swiperStyle.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSearch } from "./searchContext";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Props = {};

const Products = [
  {
    alt: "1",
    image: "/mlikfesh.png",
    name: "ชาไทย",
  },
  {
    alt: "2",
    image: "/mlikfesh.png",
    name: "นมชมพู",
  },
  {
    alt: "3",
    image: "/mlikfesh.png",
    name: "โกโก้",
  },
  {
    alt: "4",
    image: "/mlikfesh.png",
    name: "ชาเขียว",
  },
  {
    alt: "5",
    image: "/mlikfesh.png",
    name: "ชามะนาว",
  },
  {
    alt: "6",
    image: "/mlikfesh.png",
    name: "ลาเต้",
  },
];

export default function MenuSlider({}: Props) {
  const { searchTerm } = useSearch();
  console.log("🚀 ~ MenuSlider ~ searchTerm:", searchTerm);
  return (
    <div className="container">
      <h1 className="heading">เมนูยอดฮิต</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {Products.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              width: "unset",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            }}
          >
            <div className="flex flex-col gap-6 mb-20 group rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 opacity-10 group-hover:opacity-50" />
              <div className="relative flex space-x-2">
                {/* <Badge variant={"secondary"}>
                  <Flame className="text-orange-600 group-hover:text-red-600 w-[32px] h-[32px]" />
                </Badge> */}
                <h1 className="text-xl lg:text-2xl">{item.name} </h1>
              </div>
              <ShoppingCart
                onClick={() => console.log("name:", item.name)}
                className="absolute bottom-7 left-5 text-foreground group-hover:text-primary group-hover:scale-105 duration-100"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
}
