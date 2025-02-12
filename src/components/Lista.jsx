import Persona from './Persona'
const Lista = ({ lista, onDelete }) => {
    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Numero</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(person => 
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.number}</td>
                            <td><button onClick={() => onDelete(person.id)}>Eliminar</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Lista