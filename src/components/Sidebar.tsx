"use client";

import Link from "next/link";
import { Activity, Layout, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type SideItem = {
  name: string;
  isActive: boolean;
  isExpanded: boolean;
};

export const Sidebar = () => {
  const [sideItem, setSideItem] = useState<SideItem>({} as SideItem);

  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/admin/home`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `#`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger
            className={cn(
              "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
              sideItem.isActive &&
                sideItem.isExpanded &&
                sideItem.name === "item-1" &&
                "bg-sky-500/10 text-sky-700"
            )}
          >
            <div className="flex items-center gap-x-2">
              <div className="relative">
                {/* <Image
                  fill
                  src={""}
                  alt=""
                  className="rounded-sm object-cover"
                /> */}
                {/* <Activity className="h-4 w-4" /> */}
              </div>
              <span className="font-medium text-sm">Menu</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-1 mr-2 text-neutral-700">
            {routes.map((route) => (
              <Button
                key={route.href}
                size="sm"
                onClick={() => onClick(route.href)}
                className={cn(
                  "w-full font-normal justify-start pl-10 mb-1",
                  pathname === route.href && "bg-sky-500/10 text-sky-700"
                )}
                variant="ghost"
              >
                {route.icon}
                {route.label}
              </Button>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
