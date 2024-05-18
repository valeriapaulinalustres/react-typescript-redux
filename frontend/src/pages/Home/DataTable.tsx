//import { InboundCase } from '../../utils/interfaces/inboundCaseInterfase'; // Asegúrate de tener esta interfaz definida



// type Props = {
//     inboundCases: InboundCase[] | undefined;
// }

const DataTable = ( 
  // { inboundCases }: Props
)
  : JSX.Element => {
    return (
        <div>
            {/* {inboundCases ? (
                <table>
                    <thead>
                        <tr>
                            <th>Gestión</th>
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
                                <td>{inboundCase.last_updated}</td>
                                <td>{inboundCase.case_uuid}</td>
                                <td>{inboundCase.phone}</td>
                                <td>{inboundCase.extra_metadata.dni}</td>
                                <td>{inboundCase.extra_metadata.grupo}</td>
                                <td>{inboundCase.extra_metadata.orden}</td>
                                <td>{inboundCase.case_duration}</td>
                                <td>{inboundCase.case_result.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No data available</div>
            )} */}
        </div>
    );
}

export default DataTable;
