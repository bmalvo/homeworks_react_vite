import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom"
import { PromiseData } from "./PromiseData";

export const AwaitedDate = () => {

    const { dataPromise } = useLoaderData() as { dataPromise: Promise<string> };
    console.log('awaited loader data: ', dataPromise)
    
    return <div>
        <h1>Awaited Data</h1>
        <Suspense fallback='Loading awaited data...'>
            <Await resolve={ dataPromise}>
                {/* {(data) =>  <p>{ data }</p>}  */}
                <PromiseData />
            </Await>
        </Suspense>
    </div>
}