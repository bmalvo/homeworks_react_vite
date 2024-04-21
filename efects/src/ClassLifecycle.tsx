import { Component } from "react";

type State = {
    counter: number;
}

type Props = object;

class ClassLifecycle extends Component<Props, State> {
    state = {
        counter: 0,
    }

    interval: number | null = null;

    componentDidMount(): void {
        console.log('have been mounted');
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                counter: prevState.counter + 1
            }))
        }, 1000)
    }

    componentDidUpdate(_: Props, prevState: Readonly<State>): void {
        console.log('Preview counter', prevState.counter);
        console.log('Current counter', this.state.counter);
    }

    componentWillUnmount(): void {
        if (this.interval === null) return;

        clearInterval(this.interval);   
    }

    render() {
        return (
            <h1>{ this.state.counter}</h1>
        )
    }
}

export { ClassLifecycle }
