import { Typography } from "@mui/material";
import { ReactNode } from "react"

export type PageHeaderProps = {

    children: ReactNode;
}

export const PageHeader = ({children}: PageHeaderProps) => {

    return <>
        <Typography variant="h1">{ children }</Typography>
    </>
}