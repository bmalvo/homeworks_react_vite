export const Bar = () => {
    "use no memo";

    const date = new Date();

    return <>
        <div>
            <p>Lorem ipsum dolor sit { date.getTime()}</p>
        </div>
    </>
}