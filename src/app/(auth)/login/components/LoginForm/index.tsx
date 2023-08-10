import { Input } from "@components/ds/Input"
import Link from "next/link"

export function LoginForm() {
    return (
        <div className="p-4 border border-gray-800 rounded-md bg-gray-900 w-full">
            <form className="flex flex-col gap-4">
                <Input.Root>
                    <Input.Label htmlFor="username">
                        Username or email address
                    </Input.Label>
                    <Input.Field id="username" type="text" />
                </Input.Root>
                <Input.Root>
                    <Input.Label htmlFor="password">Password</Input.Label>
                    <Input.Option>
                        <Link href="#">Forgot password?</Link>
                    </Input.Option>
                    <Input.Field id="password" type="password" />
                </Input.Root>
                <button className="bg-green-700 text-sm text-white h-8 rounded-md hover:brightness-125">
                    Sign in
                </button>
            </form>
        </div>
    )
}
