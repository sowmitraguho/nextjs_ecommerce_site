"use client"

import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useSession } from "next-auth/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useCart } from "@/Context/CartContext";
import { useRouter } from "next/navigation";


export default function Cart() {
  const { cartCount } = useCart();
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="relative">
      <Tooltip>
        <TooltipTrigger disabled={!session} className={session ? "cursor-pointer" : "cursor-not-allowed opacity-50"}>
          <ShoppingCart onClick={() => {router.push("/dashboard/UserCart")}} className="w-6 h-6 cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>See Your Cart</p>
        </TooltipContent>
      </Tooltip>
      
      {cartCount > 0 && (
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0 text-xs">
          {cartCount}
        </Badge>
      )}
    </div>
  )
}
