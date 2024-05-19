import React from 'react';
import styles from './Tabs.module.css';

type DateSelected = {
  from: string;
  to: string;
};

type Props = {
  selectedDate: DateSelected;
  setSelectedDate: React.Dispatch<React.SetStateAction<DateSelected>>;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};

const Tabs = ({ selectedDate, setSelectedDate, selectedTab, setSelectedTab }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.screens}>
        <p onClick={() => setSelectedTab("Detalle")} className={selectedTab === "Detalle" ? styles.active : ''}>Detalle</p>
        <p onClick={() => setSelectedTab("Dashboards")} className={selectedTab === "Dashboards" ? styles.active : ''}>Dashboards</p>
      </div>
      <div className={styles.date}>
        <p>AÑO</p>
        <p>MES</p>
        <p>SEMANA</p>
        <p>DÍA</p>
        <input
          type="date"
          value={selectedDate.from}
          onChange={(e) => setSelectedDate({ ...selectedDate, from: e.target.value })}
        />
        <input
          type="date"
          value={selectedDate.to}
          onChange={(e) => setSelectedDate({ ...selectedDate, to: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Tabs;

