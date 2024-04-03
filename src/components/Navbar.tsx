"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./MobileSidebar";
import { signOut, useSession } from "next-auth/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { removeAccessToken } from "@/services/cookie-svc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "./ui/avatar";
import { Search } from "./search";
import { MainNav } from "./main-nav";
import { useLocale, useTranslations } from "next-intl";
import { LocaleToggle } from "./locale-toggle";
import { SetStateAction, useState } from "react";

export const Navbar = () => {
  const session = useSession();
  const locale = useLocale();
  const t = useTranslations("NavBar");
  const [searchValue, setSearchValue] = useState("");

  const handleSignOut = () => {
    removeAccessToken();
    signOut({ callbackUrl: "/", redirect: true });
  };

  const handleSearch = (value: SetStateAction<string>) => {
    setSearchValue(value);
    // ทำอะไรสักอย่างเมื่อมีการเปลี่ยนแปลงค่าค้นหา
  };

  if (session.status === "loading") {
    return (
      <div className="space-x-2 flex items-center justify-between fixed top-0 w-full h-14 px-4 border-b shadow-smb bg-background">
        <div className="space-y-2 mt-4">
          <Skeleton className="h-2 w-[120px]" />
          <Skeleton className="h-2 w-[100px]" />
        </div>
        <Skeleton className="h-10 w-10 mt-2 rounded-full" />
      </div>
    );
  }
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex items-center bg-background">
      <MobileSidebar />
      <div className="md:max-w-screen-2xl mx-auto flex items-center space-x-4 w-full justify-between">
        <p className="logo-ds">B&W</p>
        <div className="hidden md:flex ml-2 mx-auto  items-center w-full">
          <MainNav className="mx-6" />
        </div>
        <Search onSearch={handleSearch} />
        <LocaleToggle />
        <ThemeToggle />
        {session?.data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                  <AvatarFallback className="h-10 w-10">
                    {session.data.user.username?.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <div className="flex justify-center">
              <DropdownMenuContent className="w-56 items-start">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {session.data.user.username}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground flex">
                      {session.data.user.username}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    {t("profile")}
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    {t("setting")}
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  {t("logout")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
        ) : (
          <Button size="sm" asChild>
            <Link href={"/" + locale + "/login"}>Sign In</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
