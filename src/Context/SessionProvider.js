// app/providers/SessionProvider.js
"use client"; 

import { SessionProvider } from "next-auth/react";

export default function MySessionProvider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
