import { useGetClientsQuery } from "../../redux/services/clientServices";
import { useGetInboundCasesQuery } from "../../redux/services/inboundCaseServices";
import { skipToken } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import DataTable from "./components/dataTable/DataTable";
import Header from "./components/header/Header";
import styles from "./Home.module.css";
import SideMenu from "./components/sideMenu/SideMenu";
import StatusTabs from "./components/statusBar/StatusTabs";
import Tabs from "./components/tabs/Tabs";
import { InboundCase } from "../../utils/interfaces/inboundCaseInterfase";

export const Home = (): JSX.Element => {
  const { data: clients, error: errorClients, isLoading: isLoadingClients } = useGetClientsQuery();
  const [selectedClient, setSelectedClient] = useState<number | null>(null);

  const { data: inboundCases, error: errorInboundCases, isLoading: isLoadingInboundCases } = useGetInboundCasesQuery(
    selectedClient !== null
      ? {
          bot: selectedClient,
          local_updated__date__gte: "2000-03-01",
          local_updated__date__lte: "2024-03-25",
        }
      : skipToken 
  );

  const handleClickClient = (id: number) => {
    setSelectedClient(id);
  };

  if (isLoadingClients) return <div>Loading...</div>;
  if (errorClients) return <div>Error</div>;

  console.log("clients", clients);
  console.log("inboundCases", inboundCases, errorInboundCases);

  return (
    <div className={styles.container}>
      <SideMenu clients={clients} handleClickClient={handleClickClient} />
      <main className={styles.main}>
        <Header />
        <Tabs />
        <div className={styles.tableContainer}>
          <StatusTabs />
          {selectedClient !== null && !isLoadingInboundCases && inboundCases && (
            <DataTable inboundCases={inboundCases.results} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
