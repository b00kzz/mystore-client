"use client";
import React from "react";
import CardMenu from "@/components/card-menu";
import { useTranslations } from "next-intl";
import CarouselHome from "@/components/CarouselHome";

type Props = {};

export default function HomeProduct({}: Props) {
  const t = useTranslations("Menu");
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <CarouselHome />
        </div>
        <p className="font-bold p-6">MENU</p>
        <CardMenu />
      </div>
    </>
  );
}
