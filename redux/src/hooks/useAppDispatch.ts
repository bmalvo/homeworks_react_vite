import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"

export const useAppDispatch = () => {

    const dispatch = useDispatch<AppDispatch>();

    return dispatch;
}