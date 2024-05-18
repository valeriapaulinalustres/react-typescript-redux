import { useGetClientsQuery } from '../../redux/services/clientServices';
import { useGetInboundCasesQuery } from '../../redux/services/inboundCaseServices';
import styles from './Home.module.css'

export  const Home = () : JSX.Element =>{

    const { data: clients, error: errorClients, isLoading: isLoadingClients } = useGetClientsQuery();

    const { data: inboundCases, error: errorInboundCases, isLoading: isLoadingInboundCases } = useGetInboundCasesQuery({
        bot: 28,
        local_updated__date__gte: '2000-03-01',
        local_updated__date__lte: '2024-03-25'
      });

    if (isLoadingClients) return <div>Loading...</div>;
    if (errorClients) return <div>Error</div>;

console.log('clients', clients)
console.log('inboundCases', inboundCases, errorInboundCases)

    return (
        <div>Hola Inceptia</div>
    )
}

export default Home