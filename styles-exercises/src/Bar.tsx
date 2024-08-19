import styled from "styled-components"
import { shadow } from "./mixins"


const Element = styled.div<{color: string}>`

    width: 300px;
    height: 100px;
    padding: 30px;
    border: 1px solid red;
    color: #111;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    ${shadow}
`

export const Bar = () => {

    return <>
        <Element color= 'red'>
        Lorem ipsum dolor sit amet.
        </Element>
    </>
}