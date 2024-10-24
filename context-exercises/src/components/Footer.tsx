import { useConfigContext } from "../context/useConfigContext"

export const Footer = () => {

    const { colors: {primary, secondary}} = useConfigContext();

    return <>
        <footer style={{
            padding: 24,
            backgroundColor: secondary,
            color: primary
        }}>
        Lorem ipsum dolor sit amet consectetur.    
        </footer>
    </>
}