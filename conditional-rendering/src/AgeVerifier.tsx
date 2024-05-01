type AgeVerifierProps = {
    age: number;
}

//#1 if OK version

// export const AgeVerifier = ({age}: AgeVerifierProps) => {
//     if (age >= 18) return <div>
//       <h1>Welcome adult user!</h1>
//     </div>
    
//     return <div>
//         <h1>(X) acces denied!</h1>
//     </div>
// }

//#2 if in jsx NOT OK! version

// export const AgeVerifier = ({age}: AgeVerifierProps) => {
    
//     return <div>
//         {(() => { if (age >= 18) return <h1>Welcome adult!</h1>; else return '(X) access denied!!!' })()}
//     </div>
// }

// #3 if in apart method- OK

// export const AgeVerifier = ({age}: AgeVerifierProps) => {
    
//     const getContent = (age: number) => {
//         if (age >= 18) return <h1>Welcome adult!</h1>
//         return '(X) access denied!!!'
//     }
//     return <div>
//         {getContent(age)}
//     </div>
// }


// #4 use tenary operator- OK

// export const AgeVerifier = ({age}: AgeVerifierProps) => {
    
//     return <div>
//         {(age >= 18) ? <h1>Welcome adult!</h1> : '(X) access denied!!!'}
//     </div>
// }

// #5 with if using stored in variable - OK

export const AgeVerifier = ({ age }: AgeVerifierProps) => {
    
    const content = age >= 18 ? <h1>Welcome adult!</h1> : <p>(X) access denied!!!</p>;
    
    return <div>{ content }</div>
}
