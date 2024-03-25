import { ReactNode } from "react";

type Props = {
    title: string;
    left?: ReactNode
}

export const PageHeader = ({ title, left }: Props) => {
    return (
        <header>
            { left  }
            <h1>{title}</h1>
        </header>
)}
