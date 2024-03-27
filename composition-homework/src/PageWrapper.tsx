import { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
}

export const PageWrapper = ({ title, children }: Props) => {
    return <div style={{
        maxWidth: 800,
        margin: '0% 10%', 
    }}>
        <h1> {title}</h1>
        { children }
    </div>
}