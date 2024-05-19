import styles from './StatusBar.module.css'


type Props = {
    setStatus: (status:string) => void;
}

const StatusTabs = ({setStatus}:Props): JSX.Element => {

const menuItems = [
    "TODOS", "TRANSFERIDOS", "NIEGA CONFIRMACIÓN DATOS", "CLIENTE NO ENCONTRADO EN DB", "LLAMANDO", "CORTÓ CLIENTE", "MAIL ENVIADO", "INDEFINIDO", "NO ENCONTRADO EN DB"
]



    return (
        <div className={styles.container}>
            {menuItems.map((item, index)=>{
                return(
                    <p key={index} onClick={()=>setStatus(item)}>{item}</p>
                )
            })}
        </div>
    );
}

export default StatusTabs;
