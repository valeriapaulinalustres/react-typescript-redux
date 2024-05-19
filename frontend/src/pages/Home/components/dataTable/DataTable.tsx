import { InboundCase } from "../../../../utils/interfaces/inboundCaseInterfase";
import styles from './DataTable.module.css'
import { CiCalendar } from "react-icons/ci";
import { MdOutlineStars } from "react-icons/md";


type Props = {
  inboundCases: InboundCase[];
};
const DataTable = ( 
   { inboundCases }: Props
)
  : JSX.Element => {
    return (
        <div className={styles.container}>
            {inboundCases ? (
                 <div className={styles.tableWrapper}>
                <table>
                    <thead>
                        <tr>
                            <th>Gestionado</th>
                            <th>ID Caso</th>
                            <th>Teléfono</th>
                            <th>DNI</th>
                            <th>Grupo</th>
                            <th>Orden</th>
                            <th>Llamada</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inboundCases.map(inboundCase => (
                            <tr key={inboundCase.id}>
                                <td className={styles.iconContainer}><CiCalendar className={styles.icon} />{inboundCase.last_updated}</td>
                                <td>{inboundCase.case_uuid}</td>
                                <td>{inboundCase.phone}</td>
                                <td>{inboundCase.extra_metadata.dni}</td>
                                <td>{inboundCase.extra_metadata.grupo}</td>
                                <td>{inboundCase.extra_metadata.orden}</td>
                                <td className={styles.iconContainer}><MdOutlineStars className={styles.icon}/>{inboundCase.case_duration}</td>
                                <td className={inboundCase.case_result.name === "Cliente no encontrado en DB" ? styles.clientNotFound : ""}>{inboundCase.case_result.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}

export default DataTable;
