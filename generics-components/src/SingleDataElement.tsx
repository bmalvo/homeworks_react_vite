import { SingleElement } from "./types"

type SingleDataElementProps = {

    item: SingleElement;
}

export const SingleDataElement = ({item}: SingleDataElementProps) => {

    return <>
        <div>
            <h2>{ item.value }</h2>
        </div>
    </>
}