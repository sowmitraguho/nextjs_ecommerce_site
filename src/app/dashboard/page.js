import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../(site)/api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/auth/signin"); // if not logged in, send to login page
  // }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name} 🎉</h1>
      <p>Email: {session.user.email}</p>

    </div>
  );
}
