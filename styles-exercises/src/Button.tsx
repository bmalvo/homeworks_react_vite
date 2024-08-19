import styled from "styled-components";

type ButtonProps = {

    label: string;
    onClick: () => void;
}

const StyledButton = styled.button`
    
    color: ${props => props.theme.colors.textPrimary};
    background-color: ${props => props.theme.colors.primary};
    border: none;
    padding: 15px;
    min-width: 200px;
    border-radius: 7px;`

export const Button = ({label, onClick}: ButtonProps) => {

    return <StyledButton onClick= {onClick}>
        {label}
    </StyledButton>
}