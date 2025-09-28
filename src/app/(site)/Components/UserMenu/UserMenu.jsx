"use client";

import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function UserMenu() {
  const { data: session, status } = useSession();

  // While session is loading
  if (status === "loading") {
    return <p className="text-sm text-gray-500">Loading...</p>;
  }

  // If not logged in → Show Login Button
  if (!session) {
    //console.log("User not logged in", session);
    return (
      <Button variant="outline">
        <Link href="/auth/signin">Login</Link>
      </Button>
    );
  } else {
    console.log("User session:", session.user.email);
  }
  // If logged in → Show Avatar with dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={session.user?.image || "/default-avatar.png"}
            alt={session.user?.name || "User"}
          />
          <AvatarFallback className={"bg-pink-200 text-pink-600 font-bold"}>
            {session.user?.name?.charAt(0).toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-pink-50/70 font-semibold text-pink-600 ">
        <DropdownMenuItem className="cursor-pointer">
          {session.user?.email}
        </DropdownMenuItem>
        {session.user?.email === "ganesh@gmail.com" && (
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onClick={() => signOut()}
          className="cursor-pointer text-red-500"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
