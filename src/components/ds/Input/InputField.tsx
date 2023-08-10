import { HTMLInputTypeAttribute } from "react"

interface InputFieldProps {
    type: HTMLInputTypeAttribute
    id: string
}

export function InputField({ type, id }: InputFieldProps) {
    return (
        <input
            type={type}
            id={id}
            className="py-1 px-4 rounded-md border border-gray-600 bg-gray-950 text-sm focus:outline-2 focus:outline-blue-500"
        />
    )
}
