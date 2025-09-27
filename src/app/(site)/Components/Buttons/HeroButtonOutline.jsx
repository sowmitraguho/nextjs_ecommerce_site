import { Button } from '@/components/ui/button'
import React from 'react'

export default function HeroButtonOutline() {
    return (
        <Button
            variant="outline"
            className="border-purple-500  bg-transparent text-white hover:text-pink-500 hover:bg-white/70 px-6 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto"
        >
            Learn More
        </Button>
    )
}
