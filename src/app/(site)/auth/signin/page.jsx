'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react";
import LoginForm from "./Components/LoginForm";

export default function SignIn() {
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">

        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://i.ibb.co/nNX9qySF/register.png"
            alt="Makeup Shop"

            className="object-cover h-full w-full"
          />
        </div>

       
        <LoginForm />
      </div>
    </div>
  );
}
