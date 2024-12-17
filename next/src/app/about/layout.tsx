import { ReactNode } from "react";
import { Container } from "../components/Container";

export type AboutLayoutProps = Readonly<{

    children: ReactNode;
}>

const AboutLayout = ({ children }: AboutLayoutProps) => {
  
    return (
        <Container >
            <h1>About</h1>
            <section>
                {children}
            </section>
        </Container>
     
    )
};

export default AboutLayout;