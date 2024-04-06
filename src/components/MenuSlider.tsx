"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "@/./app/[locale]/test/style.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type Props = {};

export default function MenuSlider({}: Props) {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
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
        className=""
      >
        <SwiperSlide>
          <Image
            src={"/Flag_of_Thailand.svg"}
            width={10}
            height={10}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Flag_of_Thailand.svg"}
            width={10}
            height={10}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Flag_of_Thailand.svg"}
            width={10}
            height={10}
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBigLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowBigRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
