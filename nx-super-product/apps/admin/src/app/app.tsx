import styled from 'styled-components';
import { LoginForm } from '@nx-super-product/auth';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <LoginForm />
    </StyledApp>
  );
}

export default App;
