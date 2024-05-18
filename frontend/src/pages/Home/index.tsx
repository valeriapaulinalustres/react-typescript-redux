import { useGetClientsQuery } from '../../redux/services/clientServices';
import styles from './Home.module.css'

export  const Home = () : JSX.Element =>{

    const { data: clients, error, isLoading } = useGetClientsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

console.log(clients)

    return (
        <div>Hola Inceptia</div>
    )
}

export default Home