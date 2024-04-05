"use client";
import React from "react";
import "./style.css";
import CardProduct from "@/components/card-product";
import { useSearch } from "@/components/searchContext";

type Props = {};

export default function HomeProduct({}: Props) {
  const { searchTerm, handleSearch } = useSearch();
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
