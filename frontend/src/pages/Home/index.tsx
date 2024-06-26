import { useGetClientsQuery } from "../../redux/services/clientServices";
import { useGetInboundCasesQuery } from "../../redux/services/inboundCaseServices";
import { skipToken } from "@reduxjs/toolkit/query";
import { useState, useEffect } from "react";
import DataTable from "./components/dataTable/DataTable";
import Header from "./components/header/Header";
import styles from "./Home.module.css";
import SideMenu from "./components/sideMenu/SideMenu";
import StatusTabs from "./components/statusTabs/StatusTabs";
import Tabs from "./components/tabs/Tabs";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/hooks";
import { setClients } from "../../redux/features/clients/clientsSlice";
import { setFilteredCases } from "../../redux/features/inboundCases/inboundCasesSlice";

type DateSelected = {
  from: string;
  to: string;
};

export const Home = (): JSX.Element => {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("TODOS");
  const [selectedTab, setSelectedTab] = useState<string>("Detalle");
  const [numberToFilterClient, setNumberToFilterClient] = useState<number | null>(null);

  //Defines the initial state of the calendar
  const earliestDate = "2000-01-01";
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState<DateSelected>({
    from: earliestDate,
    to: today,
  });

  //Gets Inbound Cases API data
  const {
    data,
    error: errorClients,
    isLoading: isLoadingClients,
  } = useGetClientsQuery();
  const { data: inboundCases, isLoading: isLoadingInboundCases } =
    useGetInboundCasesQuery(
      selectedClient !== null
        ? {
            bot: selectedClient,
            local_updated__date__gte: selectedDate.from,
            local_updated__date__lte: selectedDate.to,
          }
        : skipToken
    );

  const dispatch = useAppDispatch();
  
    //Receives global state from redux  
  const clients = useAppSelector((state) => state.clientsReducer.clients);
  const filteredCases = useAppSelector(
    (state) => state.inboundCasesReducer.filteredCases
  );

  const handleClickClient = (id: number) => {
    setSelectedClient(id);
  };

  //Store Clients information in redux global state
  useEffect(() => {
    if (data) {
      if (selectedClient) {
        return;
      }
      if (numberToFilterClient !== null) {
        const clientMatch = data.find((el) => el.id === numberToFilterClient);
        if (clientMatch) {
          dispatch(setClients([clientMatch]));
        } else {
          dispatch(setClients([]));
        }
      } else {
        dispatch(setClients(data));
      }
    }
  }, [data, numberToFilterClient, selectedClient, dispatch]);

  
  //Store inbound cases information in redux global state
  useEffect(() => {
    if (inboundCases?.results) {
      let filtered = inboundCases.results;

      if (numberToFilterClient !== null) {
        filtered = filtered.filter(
          (el) =>
            parseInt(el.case_uuid) === numberToFilterClient ||
            el.phone === numberToFilterClient
        );
      }

      if (status !== "TODOS") {
        const statusRegex = new RegExp(status, "i");
        filtered = filtered.filter((el) =>
          statusRegex.test(el.case_result.name)
        );
      }
      dispatch(setFilteredCases(filtered));
    }
  }, [inboundCases, status, numberToFilterClient, dispatch]);

  if (isLoadingClients) return <div>Loading...</div>;
  if (errorClients) return <div>Error</div>;

  return (
    <div className={styles.container}>
      <SideMenu clients={clients} handleClickClient={handleClickClient} />
      <main className={styles.main}>
        <Header
          setNumberToFilterClient={setNumberToFilterClient}
          numberToFilterClient={numberToFilterClient}
        />
        <Tabs
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className={styles.tableContainer}>
          <StatusTabs setStatus={setStatus} status={status} />
          {selectedClient !== null &&
            !isLoadingInboundCases &&
            (selectedTab === "Detalle" ? (
              <DataTable inboundCases={filteredCases} />
            ) : (
              <div>Aquí va el componente de Dashboards</div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
