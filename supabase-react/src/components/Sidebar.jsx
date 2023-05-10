import { Menu } from 'primereact/menu';
import PropTypes from 'prop-types';
import {MyButton} from '../components/Button'
import { useHistory, Link } from 'react-router-dom'

import '../assets/scss/sidebar.scss';

export const Sidebar = ({name, ...props}) => {

    const history = useHistory()


    const items = [
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            command: ()=>{history.push("/profile")}

        },
        {
            label: 'Todo',
            icon: 'pi pi-fw pi-file',
            command: ()=>{history.push("/todo")}

        },
        {
            label: 'Data',
            icon: 'pi pi-fw pi-database',
            command: ()=>{history.push("/todo")}
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            command: ()=>{history.push("/calendar")}

        }
    ];


    function logout(){
        localStorage.clear();
        history.push('/login');
    }

    return (
        <div className="sidebar">
            <h2 className='name'>{name}</h2>
            <Menu multiple={false} model={items} className="w-full md:w-25rem" />

            <div className='logoutButton'>
                <MyButton primary={false} severity="secondary" icon="pi pi-power-off" label='Logout' size="medium" onClick={logout}/> 
            </div>
        </div>
    )
}


Sidebar.protoTypes = {
    name: PropTypes.string
}


Sidebar.defaultProps = {
    name: "name"
};
