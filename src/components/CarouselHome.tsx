import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
};
type Props = {};

export default function CarouselHome({}: Props) {
  const [products] = useState<Product[]>([
    {
      id: 1,
      imageUrl: "/mlikfesh.png",
      name: "Milk Fesh",
    },
    {
      id: 2,
      imageUrl: "/fuit.png",
      name: "Fruit",
    },
    {
      id: 3,
      imageUrl: "/promotion.png",
      name: "Promotion",
    },
    {
      id: 4,
      imageUrl: "/topping.png",
      name: "Topping",
    },
  ]);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-3/4 z-10"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card className="w-[85%]">
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-black/20  rounded-md font-mono">
                  <Image
                    className="hover:scale-125 transition delay-150 "
                    src={product.imageUrl}
                    width="100"
                    height="100"
                    alt={product.name}
                  />
                  <span className="text-3xl font-semibold">{product.name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
