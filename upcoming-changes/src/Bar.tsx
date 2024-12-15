export const Bar = () => {

    const date = new Date();

    return <>
        <div>
            <p>Lorem ipsum dolor sit { date.getTime()}</p>
        </div>
    </>
}