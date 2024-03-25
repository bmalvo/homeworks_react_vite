import { Component, PropsWithChildren, ReactNode} from "react"

type Props = PropsWithChildren;

export const Container = ({ children}: Props) => {
    return <div style={{
        backgroundColor: "lime", 
        maxWidth: 800,
        padding: 20,
        margin: '0 auto'
    }}>
      { children }
    </div>
}

// export class Container extends Component<Props> {
//     render() {
//       const { title, children } = this.props
//         return (
//         <div>
//           <h1>{ title }</h1>
//           { children }
//         </div>
//     )}
// }
