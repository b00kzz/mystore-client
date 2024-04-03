import React from "react";
import "./style.css";
import CardProduct from "@/components/card-product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  icons: "/Flag_of_Thailand.svg",
};

type Props = {};

export default function HomeProduct({}: Props) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-5">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </>
  );
}
