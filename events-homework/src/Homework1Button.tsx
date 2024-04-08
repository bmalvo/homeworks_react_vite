type Props = {
    onClick: (which: string) => void;
    label: string;
}

const Homework1Button = ({onClick, label}: Props) => {
    return <button onClick={() => onClick(label)}>{ label }</button>
}

export { Homework1Button }
