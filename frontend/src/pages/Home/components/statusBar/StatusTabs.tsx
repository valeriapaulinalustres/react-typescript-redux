import styles from './StatusBar.module.css'

const StatusTabs = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <p>TODOS</p>
            <p>TRANSFERIDOS</p>
            <p>NIEGA CONFIRMACIÓN DATOS</p>
            <p>CLIENTE NO ENCONTRADO EN DB</p>
            <p>LLAMANDO</p>
            <p>CORTÓ CLIENTE</p>
            <p>MAIL ENVIADO</p>
            <p>INDEFINIDO</p>
            <p>NO ENCONTRADO EN DB</p>

        </div>
    );
}

export default StatusTabs;
