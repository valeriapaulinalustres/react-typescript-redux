import { Client } from "../../../../utils/interfaces/clientInterface";
import styles from "./SideMenu.module.css";

type Props = {
  clients?: Client[];
  handleClickClient: (id: number) => void;
};

export const SideMenu = ({ clients, handleClickClient }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <h2>CLIENTE</h2>
      </div>
      <main className={styles.clients}>
        {clients ? (
          clients.map((client) => (
            <div key={client.id} className={styles.client} onClick={() => handleClickClient(client.id)}>
              <h5>{client.name}</h5>
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
