"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";
import Logo from "../../../public/logo.png";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function TestDashboard2() {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-muted px-4 md:px-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link
              href="#"
              className="flex items-center gap-1 font-semibold whitespace-nowrap">
              <Image src={Logo} width={32} height={28} alt="" />
              <span className="text-lg tracking-tighter">TaskTrace</span>
              <span className="sr-only">Logo</span>
            </Link>
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link
          href="#"
          className="flex items-center gap-1 font-semibold whitespace-nowrap">
          <Image src={Logo} width={32} height={28} alt="" />
          <span className="text-lg tracking-tighter">TaskTrace</span>
          <span className="sr-only">Logo</span>
        </Link>
        <nav className="hidden flex-1 justify-center flex-col gap-6 text-base font-medium lg:flex lg:flex-row lg:items-center lg:gap-6">
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground">
            Settings
          </Link>
        </nav>

        <div className="items-center ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 border border-gray-600 cursor-pointer">
                <AvatarImage src={""} alt="profile-image" />
                <AvatarFallback className="bg-white">
                  <PersonIcon className="h-5 w-5 text-gray-600" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-base font-medium leading-none">
                    Kennedy Mwendwa
                  </p>
                  <p className="text-xs leading-none text-gray-500">
                    kennymwendwa67@gmail.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center">
                <IoSettingsOutline className="mr-2 w-5 h-5" /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {}}
                className="flex items-center hover:bg-red-100">
                <MdLogout className="mr-2 w-5 h-5" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
            <Button className="mt-4">Add Product</Button>
          </div>
        </div>
      </main>
    </>
  );
}