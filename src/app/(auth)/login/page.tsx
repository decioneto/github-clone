"use client"

import { GitSymbol } from "@components/GitSymbol"
import { ErrorBox } from "@components/ds/ErrorBox"
import { LoginForm } from "../components/LoginForm"
import { Footer } from "../components/Footer"
import { useState } from "react"
import { HeaderTitle } from "../components/HeaderTitle"
import Link from "next/link"

export default function LoginPage() {
    const [isErrorVisible, setIsErrorVisible] = useState(false)

    function closeErrorBox() {
        setIsErrorVisible(false)
    }

    return (
        <>
            <HeaderTitle title="Sign in to GitHub" />

            {isErrorVisible && (
                <ErrorBox
                    message="Incorrect username or password"
                    close={closeErrorBox}
                />
            )}
            <LoginForm />
            <Footer>
                <p>
                    New to GitHub? &nbsp;
                    <Link href="signup" className="text-blue-700">
                        Create an account.
                    </Link>
                </p>
            </Footer>
        </>
    )
}
