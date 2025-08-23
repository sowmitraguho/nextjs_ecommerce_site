"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Signing up:", { userName, email, password });
    try{
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userName, email, password }),
        });
        if (res.ok) {
        console.log("User created successfully");
        router.push("/auth/signin");}
    } catch (error) {
        console.error("Error signing up:", error);
    }finally {
      setLoading(false)
    }

    
    
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - full image */}
      <div className="relative w-1/2 hidden lg:block">
        <img
          src="https://i.ibb.co/nNX9qySF/register.png" 
          alt="Makeup Shop"
          
          className="object-cover"
          
        />
      </div>

      {/* Right side - form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-white dark:bg-gray-900">
        <Card className="w-full max-w-md shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Create Your Account
            </CardTitle>
            <p className="text-sm text-gray-600 text-center mt-2">
              Join our makeup community and get access to exclusive offers, tips,
              and the latest beauty trends.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <Label htmlFor="user_name" className="mb-1">Name</Label>
                <Input
                  id="user_name"
                  type="text"
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="mb-1">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="mb-1">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              >
                 {loading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <a href="/auth/signin" className="text-pink-500 hover:underline">
                Sign In
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
