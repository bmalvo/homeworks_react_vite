import { useConfigContext } from "../context/useConfigContext"

export const Header = () => {

    const { colors: { primary, secondary } } = useConfigContext();
    
    return <>
        <header style={{
            padding: 24,
            backgroundColor: primary,
            color: secondary
        }}>
            Lorem ipsum dolor sit amet consectetur.    
        </header>
    </>
}