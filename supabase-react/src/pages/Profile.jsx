// import { useHistory } from 'react-router'
// import { useAuth } from '../contexts/_Auth'

import { Sidebar } from "../components/Sidebar.jsx";
import { CardComponent } from "../components/Card.jsx";

import "../assets/scss/profile.scss"

export const Profile = () => {
    // Get current user and signOut function from context
    // const { user, signOut } = useAuth()

    // const history = useHistory()

    // async function handleSignOut() {
    //     // Ends user session
    //     await signOut()

    //     // Redirects the user to Login page
    //     history.push('/login')
    // }

    const user = {
        displayName: "Adrian Tam",
        id: "U001"
    }

    return (
        <div className='profile'>
            <Sidebar />
            <div className='main'>
            <h1>Profile</h1>
                <CardComponent title={user.displayName} subTitle={user.id} image="https://picsum.photos/300/200"/>
                <p>Welcome, {user? user.id:"user id"}</p>
            </div>
        </div>
    );
};