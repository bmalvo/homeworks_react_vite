type HelloSomebodyProps = {
    name?: string;
}

export const HelloSomebody = ({name}: HelloSomebodyProps) => {
    return <h1>Hello {name || 'unknown'}</h1>
}
