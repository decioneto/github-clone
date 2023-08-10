import { ReactNode } from "react"

interface InputLabelProps {
    htmlFor: string
    children: ReactNode
}

export function InputLabel({ htmlFor, children }: InputLabelProps) {
    return (
        <label htmlFor={htmlFor} className="text-gray-50 text-sm">
            {children}
        </label>
    )
}
