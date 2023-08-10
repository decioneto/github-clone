import { ReactNode } from "react"
import Link from "next/link"

interface FooterProps {
    children: ReactNode
}

export function Footer({ children }: FooterProps) {
    return (
        <div className="border border-gray-800 w-full flex items-center justify-center text-sm h-14 p-4 rounded-md">
            {children}
        </div>
    )
}
