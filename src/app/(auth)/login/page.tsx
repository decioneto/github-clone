"use client"

import { GitSymbol } from "@components/GitSymbol"
import { ErrorBox } from "@components/ds/ErrorBox"
import { LoginForm } from "./components/LoginForm"
import { CreateAccount } from "./components/CreateAccount"
import { useState } from "react"

export default function LoginPage() {
    const [isErrorVisible, setIsErrorVisible] = useState(false)

    function closeErrorBox() {
        setIsErrorVisible(false)
    }

    return (
        <div className="h-screen flex flex-col justify-start items-center py-10 gap-4 w-80 mx-auto">
            <div className="flex flex-col items-center gap-8">
                <GitSymbol className="w-12 fill-gray-50" />
                <h3 className="text-xl font-light">Sign in to GitHub</h3>
            </div>

            {isErrorVisible && (
                <ErrorBox
                    message="Incorrect username or password"
                    close={closeErrorBox}
                />
            )}
            <LoginForm />
            <CreateAccount />
        </div>
    )
}
