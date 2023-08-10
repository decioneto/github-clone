import { X } from "react-feather"

interface ErrorBoxProps {
    message: string
    status?: ErrorStatus
    close: () => void
}

type ErrorStatus = "default" | "danger" | "warning" | "success"

export function ErrorBox({ message, status, close }: ErrorBoxProps) {
    return (
        <div className="flex h-14 bg-red-500 bg-opacity-10 text-xs justify-between items-center p-4 rounded-md text-white border border-red-500 border-opacity-50 w-full">
            <p>{message}</p>
            <button onClick={close}>
                <X className="w-4 h-4 text-red-500" />
            </button>
        </div>
    )
}
