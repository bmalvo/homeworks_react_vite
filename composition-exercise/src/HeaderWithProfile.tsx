import { Header } from "./Header";
import { UserProfile } from "./UserProfile";

export const HeaderWithProfile = () => {
    const userEmail = 'example@gmail.com';

    return <Header title='Lorem ipsum' >
        <UserProfile email={userEmail} />
           </Header>
}