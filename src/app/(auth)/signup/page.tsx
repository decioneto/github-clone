import { Input } from "@components/ds/Input"
import { HeaderTitle } from "../components/HeaderTitle"
import Link from "next/link"
import { ArrowRight } from "react-feather"
import { Footer } from "../components/Footer"

export default function SignUpPage() {
    return (
        <>
            <HeaderTitle title="Create your account" />
            <div className="p-4 border border-gray-800 rounded-md bg-gray-900 w-full">
                <form className="flex flex-col gap-4">
                    <Input.Root>
                        <Input.Label htmlFor="email">Email address</Input.Label>
                        <Input.Field id="email" type="text" />
                    </Input.Root>
                    <Input.Root>
                        <Input.Label htmlFor="password">Senha</Input.Label>
                        <Input.Field id="password" type="text" />
                    </Input.Root>
                    <Input.Root>
                        <Input.Label htmlFor="username">
                            Nome de usuário
                        </Input.Label>
                        <Input.Field id="username" type="text" />
                    </Input.Root>
                    <button className="bg-green-700 text-sm text-white h-8 rounded-md hover:brightness-125">
                        Sign up
                    </button>
                </form>
            </div>

            <Footer>
                <p className="flex gap-2">
                    Already have an account?
                    <Link href="login" className="text-blue-700">
                        <span className="flex gap-2">
                            Sign in <ArrowRight />
                        </span>
                    </Link>
                </p>
            </Footer>
        </>
    )
}
