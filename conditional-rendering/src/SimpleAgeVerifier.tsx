type SimpleAgeVerifierProps = {
    age: number;
}

// # conditional rendering text

// export const SimpleAgeVerifier = ({age}: SimpleAgeVerifierProps) => {
//     return <div>
//         <h1>Hi!</h1>
//         {age >= 18 && 'You are adult!'}
//   </div>
// }

// conditional rendering whole component > fail first

export const SimpleAgeVerifier = ({ age }: SimpleAgeVerifierProps) => {
    
    if (age < 18) return;

    return <div>
        <h1>Hi!</h1>
        <p>You are adult!</p>
  </div>
}
