import type { Route } from "./+types/signin"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@myafrimall/ui/components/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@myafrimall/ui/components/field";
import { Input } from "@myafrimall/ui/components/input";
import Signin from "../Images/Signin.png"
import { Button } from "@myafrimall/ui/components/button";
import { EyeOffIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@myafrimall/ui/components/input-group"

export default function SignIn() {
    return (
        <div className= "flex items-center h-screen">
            <div id="left" className="justify-center items-center w-1/2 p-18">
                <CardHeader className="">
                    <CardTitle className="font-bold text-3xl">Sign in to your account</CardTitle>
                    <CardDescription className="text-muted-foreground">
                            Log in to Myafrimall to enjoy seamless shipping to over 300 
                            <br></br>
                             countries right from Nigeria.. Don' t have an account yet?
                            <a href="/signup" className="underline hover:underline text-indigo-600">Sign Up</a>
                        </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field className="py-5">
                                <FieldLabel>Email</FieldLabel>
                                <Input
                                    autoComplete="email"
                                    className="rounded-sm border-fuchsia-300 "
                                    id="email"
                                    name="email"
                                    placeholder="user@example.com"
                                    type="email"
                                    />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="inline-end-input">Password</FieldLabel>
                                <InputGroup  className="rounded-sm border-fuchsia-300">
                                <InputGroupInput
                                autoComplete="new-password"
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                />
                                <InputGroupAddon align="inline-end">
                                <EyeOffIcon />
                                </InputGroupAddon>
                            </InputGroup>
                                <FieldDescription className="py-4"><a className="text-indigo-600 underline hover:underline">Forgot Password?</a></FieldDescription>
                            </Field>
                        </FieldGroup>
                        <FieldGroup><Button className="p-6 w-32 rounded-sm bg-indigo-400">Login</Button></FieldGroup>
                        <FieldDescription className="py-5">By clicking on create account you agree to our <a className="underline hover:underline text-indigo-600" href="/privacy-policy">privacy <br></br>policy</a> and<a className="underline hover:underline text-indigo-600" href="/privacy-policy"> terms of use</a></FieldDescription>
                    </form>
                </CardContent>
            </div>
            <div className="w-1/2">
                <img src={Signin} alt="Signin"/>
            </div>
        </div>
    )
}