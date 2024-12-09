import { Typography as MUITypography } from "@mui/material"
import { ReactNode } from "react"

export type TypographyProps = {

    children: ReactNode;
    variant?: 'h1' | 'h2';
}

export const Typography = ({variant, children}: TypographyProps) => {

    return <>
        <MUITypography variant={variant}>{ children}</MUITypography>
    </>
}