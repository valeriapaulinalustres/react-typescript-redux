import styles from "./StatusTabs.module.css";

type Props = {
  setStatus: (status: string) => void;
  status: string;
};

const StatusTabs = ({ setStatus, status }: Props): JSX.Element => {
  const menuItems = [
    "TODOS",
    "TRANSFERIDOS",
    "NIEGA CONFIRMACIÓN DATOS",
    "CLIENTE NO ENCONTRADO EN DB",
    "LLAMANDO",
    "CORTÓ CLIENTE",
    "MAIL ENVIADO",
    "INDEFINIDO",
    "NO ENCONTRADO EN DB",
  ];

  return (
    <div className={styles.container}>
      {menuItems.map((item, index) => {
        return (
          <h4
            key={index}
            onClick={() => setStatus(item)}
            className={status === item ? styles.active : ""}
          >
            {item}
          </h4>
        );
      })}
    </div>
  );
};

export default StatusTabs;
