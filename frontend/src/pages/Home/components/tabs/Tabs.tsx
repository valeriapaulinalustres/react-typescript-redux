import React from "react";
import styles from "./Tabs.module.css";

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

const Tabs = ({
  selectedDate,
  setSelectedDate,
  selectedTab,
  setSelectedTab,
}: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.screens}>
        <h3
          onClick={() => setSelectedTab("Detalle")}
          className={selectedTab === "Detalle" ? styles.active : ""}
        >
          Detalle
        </h3>
        <h3
          onClick={() => setSelectedTab("Dashboards")}
          className={selectedTab === "Dashboards" ? styles.active : ""}
        >
          Dashboards
        </h3>
      </div>
      <div className={styles.date}>
        <h3>AÑO</h3>
        <h3>MES</h3>
        <h3>SEMANA</h3>
        <h3 className={styles.active}>DÍA</h3>
        <div className={styles.inputContainer}>
          <h6>Desde:</h6>
          <input
            type="date"
            value={selectedDate.from}
            onChange={(e) =>
              setSelectedDate({ ...selectedDate, from: e.target.value })
            }
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <h6>Hasta:</h6>
          <input
            type="date"
            value={selectedDate.to}
            onChange={(e) =>
              setSelectedDate({ ...selectedDate, to: e.target.value })
            }
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
