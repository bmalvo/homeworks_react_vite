import { Component } from "react";

interface Props {
    first: number;
    second: number;
    third: number;
    fourth: number;
    fifth: number;
    sixth: number;
    seventh?: number;
}

// const ManyValues = ({first, second, third, fourth, fifth, sixth, seventh = 10}: Props) => {
//     const sum = first + second + third + fourth + fifth + sixth + seventh;
//     return <h1>{ sum }</h1>
// }

class ManyValues extends Component<Props> {
    render() {
        const { first, second, third, fourth, fifth, sixth, seventh = 10 } = this.props;
        const sum = first + second + third + fourth + fifth + sixth + seventh;
        return <h1>{ sum }</h1>
    }
}


export { ManyValues }
