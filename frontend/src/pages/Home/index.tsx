import { useGetClientsQuery } from "../../redux/services/clientServices";
import { useGetInboundCasesQuery } from "../../redux/services/inboundCaseServices";
import { skipToken } from "@reduxjs/toolkit/query";
import React, { useEffect, useState } from "react";
import DataTable from "./components/dataTable/DataTable";
import Header from "./components/header/Header";
import styles from "./Home.module.css";
import SideMenu from "./components/sideMenu/SideMenu";
import StatusTabs from "./components/statusBar/StatusTabs";
import Tabs from "./components/tabs/Tabs";
import { InboundCase } from "../../utils/interfaces/inboundCaseInterfase";

type DateSelected = {
    from: string;
    to: string
}

export const Home = (): JSX.Element => {
  const { data: clients, error: errorClients, isLoading: isLoadingClients } = useGetClientsQuery();
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [filteredCases, setFilteredCases] = useState<InboundCase[]>([]);


  const earliestDate = "2000-01-01";
  const today = new Date().toISOString().split('T')[0]

  const [selectedDate, setSelectedDate] = useState<DateSelected>({from: earliestDate, to:today})

  const { data: inboundCases, error: errorInboundCases, isLoading: isLoadingInboundCases } = useGetInboundCasesQuery(
    selectedClient !== null
      ? {
          bot: selectedClient,
          local_updated__date__gte: selectedDate.from,
          local_updated__date__lte: selectedDate.to,
        }
      : skipToken 
  );

  const handleClickClient = (id: number) => {
    setSelectedClient(id);
  };

  useEffect(() => {
    if (inboundCases?.results) {
      setFilteredCases(inboundCases.results);
    }
  }, [inboundCases]);

  if (isLoadingClients) return <div>Loading...</div>;
  if (errorClients) return <div>Error</div>;

  console.log("clients", clients);
  console.log("inboundCases", inboundCases, errorInboundCases);

  console.log('date', selectedDate)
  console.log('filtered cases', filteredCases)

  return (
    <div className={styles.container}>
      <SideMenu clients={clients} handleClickClient={handleClickClient} />
      <main className={styles.main}>
        <Header />
        <Tabs selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div className={styles.tableContainer}>
          <StatusTabs />
          {selectedClient !== null && !isLoadingInboundCases && (
            <DataTable inboundCases={filteredCases} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
