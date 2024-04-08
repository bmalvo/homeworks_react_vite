type Props = {
    onClick: () => void;
    label: string;
}

const Homework1ButtonSecondary = ({onClick, label}: Props) => {
    return <button onClick={onClick}>{ label }</button>
}

export { Homework1ButtonSecondary }
