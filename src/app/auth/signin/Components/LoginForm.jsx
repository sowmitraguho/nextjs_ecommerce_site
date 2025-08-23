"use client";

import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react";
import { toast } from "sonner"
import GoogleLoginButton from './SocialLogin';

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    setError("");
    const { email, password } = form;
    try {
      const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
      if (res.error) {
      setError(res.error);
    } else {
      toast.success("Signed in successfully!");
      e.target.reset();
      router.push("/");
    }
  } catch (err) {
    console.error("Signin error:", err);
  } finally {
    setLoading(false);
  }
  };

  return (
     <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
            <div>
              <Label htmlFor="email" className="mb-1">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="mb-1">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">{loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}</Button>

          </form>
          <hr />
          <GoogleLoginButton />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <p className="text-sm text-center mt-4 text-gray-600">
              Do not have an account?{" "}
              <a href="/auth/signup" className="text-pink-500 hover:underline">
                Sign Up
              </a>
            </p>
        </div>
  )
}
