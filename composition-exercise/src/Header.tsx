import { ReactNode } from "react";
import { UserProfile } from "./UserProfile";

type Props = {
    title: string;
    children: ReactNode
}

export const Header = ({ title, children }: Props) => {
    return (
    <header>
        <h1>{title}</h1>
            {/* <UserProfile email={email} /> */}
            { children }
    </header>
    )
}
