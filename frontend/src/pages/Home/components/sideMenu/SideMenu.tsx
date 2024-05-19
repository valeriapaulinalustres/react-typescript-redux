import { Client } from "../../../../utils/interfaces/clientInterface";
import styles from "./SideMenu.module.css";

type Props = {
  clients?: Client[];
  handleClickClient: (id: number) => void;
};

export const SideMenu = ({ clients, handleClickClient }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2>Cliente</h2>
      <main className={styles.clients}>
        {clients ? (
          clients.map((client) => (
            <div key={client.id} className={styles.client} onClick={() => handleClickClient(client.id)}>
              <p>{client.name}</p>
            </div>
          ))
        ) : (
          <p>No clients available</p>
        )}
      </main>
    </div>
  );
};

export default SideMenu;
