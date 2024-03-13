import { Component } from "react";
import { ParentClass } from '../ParentClass/parentClass';

class GrandparentClass extends Component {
    render() {
        return (
            <>
            <h1>I am a grandfather by class</h1>
            <ParentClass />
            </>
        )
    }
}

export { GrandparentClass }
