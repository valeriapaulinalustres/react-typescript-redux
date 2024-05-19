import styles from './Tabs.module.css'


type DateSelected = {
    from: string;
    to: string;
};

type Props = {
    selectedDate: DateSelected;
    setSelectedDate: (date: DateSelected) => void;
};

const Tabs = ({selectedDate, setSelectedDate}:Props): JSX.Element => {

    const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate({ ...selectedDate, from: e.target.value });
    };

    const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate({ ...selectedDate, to: e.target.value });
    };


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
                <input type="date" value={selectedDate.from} onChange={handleFromDateChange} />
                <input type="date" value={selectedDate.to} onChange={handleToDateChange} />
            </div>
        </div>
    );
}

export default Tabs;
