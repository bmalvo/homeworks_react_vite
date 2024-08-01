import styled from "styled-components"

const StyledButton = styled.button`
    color: ${props => props.theme.colors.textLight};
    border: none;
    font-family: 'Tahoma',
    border-radius: 5px;
    padding: 10px;
    background-color: ${props => props.theme.colors.primary};
`

export const Button = () => {

    return <StyledButton>Click</StyledButton>
    
}