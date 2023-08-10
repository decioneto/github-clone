import { ReactNode } from "react"

interface InputOptionProps {
    children: ReactNode
}

export function InputOption({ children }: InputOptionProps) {
    return (
        <div className="absolute right-0 top-0 text-xs text-blue-700">
            {children}
        </div>
    )
}
