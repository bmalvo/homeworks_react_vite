type SimpleAgeVerifierProps = {
    age: number;
}

export const SimpleAgeVerifier = ({age}: SimpleAgeVerifierProps) => {
    return <div>
        <h1>Hi!</h1>
        {age >= 18 && 'You are adult!'}
  </div>
}
