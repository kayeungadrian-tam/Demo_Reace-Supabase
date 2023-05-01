import { Menu } from 'primereact/menu';


export function MultipleDemo() {
    const items = [
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Todo',
            icon: 'pi pi-fw pi-file',
        },
        {
            label: 'Data',
            icon: 'pi pi-fw pi-database',
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div className="card flex sidebar">
            <h2 className='title'>Adrian Tam</h2>
            <Menu multiple={false} model={items} className="w-full md:w-25rem" />
        </div>
    )
}