import type {Route} from "./+types/signup";
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
import {Input} from "@myafrimall/ui/components/input";
import Signup from "../Images/Signup.png"
import { Button } from "@myafrimall/ui/components/button";
import { InputGroup, InputGroupInput,   InputGroupAddon, InputGroupButton } from "@myafrimall/ui/components/input-group";
import { EyeOffIcon } from "lucide-react"
import { ChevronDownIcon, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@myafrimall/ui/components/dropdown-menu"

export default function SignUp() {
    return (
        <div className= "flex justify-center items-center h-screen gap-6">
            <div id="left" className="justify-center p-4 items-center w-1/2">
                    <CardHeader className="py-7">
                        <CardTitle className="font-bold text-3xl">Create an account</CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Sign up for Myafrimall and gain unlimited access to shipping to over 
                            <br></br>
                            300 countries from Nigeria. Do you already have an account? 
                            <a href="/login" className=" underline hover:underline">Login</a>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <FieldGroup className="flex flex-row items-center">
                                <Field>
                                    <FieldLabel>First name</FieldLabel>
                                    <Input
                                        autoComplete="given-name"
                                        id="first-name"
                                        name="first-name"
                                        placeholder="John"
                                        type="text"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel>Last name</FieldLabel>
                                    <Input
                                        autoComplete="family-name"
                                        id="last-name"
                                        name="last-name"
                                        placeholder="Doe"
                                        type="text"
                                    />
                                </Field>
                            </FieldGroup>
                            <FieldGroup>
                                <Field className="py-5">
                                    <FieldLabel>Email</FieldLabel>
                                    <Input
                                        autoComplete="email"
                                        id="email"
                                        name="email"
                                        placeholder="user@example.com"
                                        type="email"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel>Phone Number</FieldLabel>
                                   <InputGroup>
                                   <InputGroupInput 
                                        autoComplete="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="90989488999"
                                        type="tel"
                                   />
                                   <InputGroupAddon align="inline-start">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger render={<InputGroupButton variant="ghost" className="pr-1.5! text-xs">+234<ChevronDownIcon className="size-3" /></InputGroupButton>} />
                                    <DropdownMenuContent align="end" sideOffset={8} alignOffset={-4}>
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>+222</DropdownMenuItem>
                                            <DropdownMenuItem>+40</DropdownMenuItem>
                                            <DropdownMenuItem>+44</DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </InputGroupAddon>
                                </InputGroup>
                                </Field>
                                <Field className="py-5">
                                    <FieldLabel>Password</FieldLabel>
                                    <InputGroup>
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
                                </Field>
                            </FieldGroup>
                            <FieldGroup>
                                <Button className="p-6 w-32 rounded-sm bg-indigo-400">Create Account</Button>
                            </FieldGroup>
                            <FieldDescription className="py-5">
                               By clicking on create account you agree to our <a className="underline hover:underline text-indigo-600" href="/privacy-policy">privacy <br></br>policy</a> and <a className="underline hover:underline text-indigo-600" href="/terms-of-use">terms of use</a>
                            </FieldDescription>
                        </form>
                    </CardContent>
            </div>
            <div id="right" className="hidden lg:flex w-1/2">
                <img src={Signup} alt="signup" />
            </div>
        </div>
    );
}
