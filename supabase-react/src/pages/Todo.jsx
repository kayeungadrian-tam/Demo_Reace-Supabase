// import { useHistory } from 'react-router'
// import { useAuth } from '../contexts/_Auth'

import { DataView } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { Sidebar } from "../components/Sidebar.jsx";
import { Button } from 'primereact/button';
import { MyButton } from '../components/Button.jsx';

// import 'primeflex/primeflex.css';

import '../assets/scss/todo.scss';



export const Todo = () => {


    const itemList = [
        {title: 'Title 1', description: 'Description 1', category: "work", status: "TODO"},
        {title: 'Title 2', description: 'Description 2', category: "work", status: "todo"},
        {title: 'Title 3', description: 'Description 3', category: "work", status: "progress"},
    ]

    const getSeverity = (item) => {
        switch (item.status) {
            case 'INSTOCK':
                return 'success';

            case 'progress':
                return 'warning';
            case 'todo':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (item) => {
        return (
            <div className="todoList">
                <div className="card">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className='tags'>

                        <span className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{item.category}</span>
                        </span>
                        <Tag value={item.status.toUpperCase()} severity={getSeverity(item)}></Tag>
                    </div>
                </div>
        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <span className="text-2xl font-semibold">{item.price}</span>
            <MyButton label="Done" icon="pi pi-check" severity="info" primary={true}></MyButton>
        </div>
            </div>
        );
    };

    return (
        <div className='todo'>
            {/* <Sidebar /> */}
            <div className='main'>
            <h1>Todo</h1>
            <DataView value={itemList} itemTemplate={itemTemplate} />
            </div>
        </div>
    );
};