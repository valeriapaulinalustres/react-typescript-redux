import { Client } from "../../utils/interfaces/clientInterface";

type Props = {
    clients?: Client[]
}

export const SideMenu = ({ clients }: Props): JSX.Element => {
    return (
        <div>
           <h2>Clientes</h2>
            {clients ? (
                <ul>
                    {clients.map(client => (
                        <li key={client.id}>{client.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No clients available</p>
            )}
        </div>
    )
}

export default SideMenu;
