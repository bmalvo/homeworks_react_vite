import { Component } from "react";
import { ChildClass } from "../ChildClass/childClass";

class ParentClass extends Component {
    render() {
        return (
            <>
                <h2>I am a father by class</h2>
                <ChildClass />
            </>
        )
    }
}

export { ParentClass }
