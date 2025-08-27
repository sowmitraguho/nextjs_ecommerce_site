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
    console.log("User not logged in", session);
    return (
      <Button variant="outline">
        <Link href="/auth/signin">Login</Link>
      </Button>
    );
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
          <AvatarFallback>
            {session.user?.name?.charAt(0).toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem className="cursor-pointer">
          {session.user?.email}
        </DropdownMenuItem>
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
 