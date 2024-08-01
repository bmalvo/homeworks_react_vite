import styled, {css} from "styled-components"

const common = css<{size: number}>`
    border-radius: 10px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;` 

const getColorValues = (first: string, second: string) => `

    background-color: ${first};
    border: 1px solid ${second};`

const First = styled.div<{size: number, firstColor: string, secondColor: string }>`

    ${common}
    ${props => getColorValues(props.firstColor, props.secondColor)}
    `

const Second = styled.div<{size: number, firstColor: string, secondColor: string}>`

    ${common}
    ${props => getColorValues(props.firstColor, props.secondColor)}
    `

export const Elements = () => {

    return <>
        <First size={250} firstColor="red" secondColor="green">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsam.</First>
        <Second size={225} firstColor="green" secondColor="red">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, dolores?</Second>
    </>
}