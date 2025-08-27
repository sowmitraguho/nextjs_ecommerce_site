"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function GitHubLogin() {
  return (
    <button
      onClick={() => signIn("github", { callbackUrl: "/" })}
      className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition my-2 dark:bg-gray-500 dark:hover:bg-gray-100 dark:hover:text-gray-900"
    >
      <FaGithub size={20} />
      Continue with GitHub
    </button>
  );
}