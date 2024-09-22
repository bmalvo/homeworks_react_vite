import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "./hooks/useUserData"

type ProtectedProps = {

    redirect?: string;
}

export const ProtectedRoute = ({redirect}: ProtectedProps) => {
    const { email, isAuthorized } = useUserData();

    if (!isAuthorized) return <Navigate to={ redirect || '/'} />

    return <Outlet />
}