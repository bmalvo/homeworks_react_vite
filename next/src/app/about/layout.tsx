'use client'
import { ReactNode } from "react";
import { Container } from "../components/Container";
import { useRouter } from "next/navigation";

export type AboutLayoutProps = Readonly<{

    children: ReactNode;
}>

const AboutLayout = ({ children }: AboutLayoutProps) => {

    const router = useRouter();

    const handleClick = () => {

        router.push('/about/me')
    }
  
    return (
        <Container >
            <h1>About</h1>
            <ul>
                <li>
                    <button onClick={handleClick}>go to about:me</button>
                </li>
            </ul>
            <section>
                {children}
            </section>
        </Container>
     
    )
};

export default AboutLayout;