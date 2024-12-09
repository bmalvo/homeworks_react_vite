import { Typography } from "@mui/material"
import { ReactNode } from "react"

export type SectionHeaderProps = {
    
    children: ReactNode;
}

export const SectionHeader = ({children}: SectionHeaderProps) => {

    return <>
        <Typography variant="h2">{ children }</Typography>
    </>
}