
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/_Auth'

import { Sidebar } from "../components/Sidebar"

export function Dashboard() {
    // Get current user and signOut function from context
    const { user, signOut } = useAuth()

    const history = useHistory()

    async function handleSignOut() {
        // Ends user session
        await signOut()

        // Redirects the user to Login page
        history.push('/login')
    }

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='main'>
                <p>Welcome, {user?.id}!</p>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
            {/* Change it to display the user ID too 👇*/}
        </div>
    )
}