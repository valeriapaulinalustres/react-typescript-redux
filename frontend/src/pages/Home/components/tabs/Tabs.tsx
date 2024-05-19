import styles from './Tabs.module.css'

const Tabs = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.screens}>
                <p>Detalle</p>
                <p>Dashboards</p>
            </div>
            <div className={styles.date}>
                <p>AÑO</p>
                <p>MES</p>
                <p>SEMANA</p>
                <p>DÍA</p>
                <input type="date"/>
                <input type="date"/>
            </div>
        </div>
    );
}

export default Tabs;
