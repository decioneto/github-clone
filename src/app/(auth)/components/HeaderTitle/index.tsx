import { GitSymbol } from "@components/GitSymbol"

interface HeaderTitleProps {
    title: string
}

export function HeaderTitle({ title }: HeaderTitleProps) {
    return (
        <div className="flex flex-col items-center gap-8">
            <GitSymbol className="w-12 fill-gray-50" />
            <h3 className="text-xl font-light">{title}</h3>
        </div>
    )
}
