import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle></ModeToggle>
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-6">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant={"ghost"} className="w-full">
              <Link href={"/cart"}>
                <ShoppingCartIcon /> Cart
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/sign-in">
                <UserIcon /> Sign In
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
