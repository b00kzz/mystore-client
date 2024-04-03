"use client";
import React from "react";
import CardMenu from "@/components/card-menu";
import { useTranslations } from "next-intl";

type Props = {};

export default function HomeProduct({}: Props) {
  const t = useTranslations("Menu");
  return (
    <>
      {/* <div className="p-10 font-bold ">
        <p>MENU</p>
        <div className="flex justify-center items-center bg-black/30 w-full h-60 md:size-72 rounded-sm">
          <div className="grid grid-cols-3 gap-4">
            <button className="menu-home">
              <p className="p-5  font-bold">TEST</p>
            </button>
            <button className="menu-home">
              <p className="p-5  font-bold">TEST</p>
            </button>
            <button className="menu-home">
              <p className="p-5  font-bold">TEST</p>
            </button>
            <button className="menu-home">
              <p className="p-5  font-bold">TEST</p>
            </button>
            <button className="menu-home">
              <p className="p-5  font-bold">TEST</p>
            </button>
            <button className="menu-home">
              <p className="p-5  font-bold">TEST</p>
            </button>
          </div>
        </div>
      </div> */}
      <div>
        <p className="font-bold p-6">MENU</p>
        <CardMenu />
      </div>
    </>
  );
}
