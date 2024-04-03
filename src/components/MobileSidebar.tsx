"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";
const SHEET_SIDES = ["left"] as const;

type MobileSidebar = (typeof SHEET_SIDES)[number];

export function MobileSidebar() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild >
            <Button className="md:hidden" variant="ghost">
              <Menu className="h-10 w-10" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-background">
            
            <SheetHeader>
              <SheetTitle>Mobile Menu</SheetTitle>
              {/* <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription> */}
            </SheetHeader>
            <Sidebar />
            <SheetFooter>
              {/* <SheetClose asChild className="mt-2">
                <Button type="submit">Save changes</Button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
