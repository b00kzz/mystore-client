"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

export default function CardProduct({}: Props) {
  return (
    <Card>
      <CardHeader>
        <img className="rounded-sm object-contain" src="https://files.gqthailand.com/uploads/mm8.jpg"/>
        <CardTitle>ชานมไข่มุก</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div> */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">ปริมาณน้ำตา %</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">25%</SelectItem>
                  <SelectItem value="sveltekit">50%</SelectItem>
                  <SelectItem value="astro">75%</SelectItem>
                  <SelectItem value="nuxt">100%</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      <Label htmlFor="name">$99</Label>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  );
}
