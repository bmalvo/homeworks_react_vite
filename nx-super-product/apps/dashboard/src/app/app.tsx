import styled from 'styled-components';
import { LoginForm } from '@nx-super-product/auth';
import { UserStatus } from '@nx-super-product/user';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <UserStatus />
      <LoginForm />
    </StyledApp>
  );
}

export default App;
