import { styled } from "@mui/material";
import { Tooltip } from "./Tooltip";

export type LabelWithTiiltipProps = {

    text: string;
    tooltip: string;
}

const Container = styled('div')({

    position: 'relative'
})


export const LabelWithTiiltip = ({text, tooltip}: LabelWithTiiltipProps) => {

    return <>
        <Container>
            <label>{text}</label>
            <Tooltip tooltip={ tooltip } x={20 } y={40} />
        </Container>
    </>
}