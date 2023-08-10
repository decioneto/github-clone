import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "700"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-gray-950 text-gray-50 min-h-screen`}
            >
                {children}
            </body>
        </html>
    )
}
