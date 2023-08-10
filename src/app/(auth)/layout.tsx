import { ReactNode } from "react"

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="h-screen flex flex-col justify-start items-center py-10 gap-4 w-80 mx-auto">
            {children}
        </div>
    )
}
