import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
export default function ClearFilterButton() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    return (
        <Button
            onClick={() => {
                setSearch("");
                setActiveCategory("All");
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-2"
        >
            Clear Filters
        </Button>
    )
}
