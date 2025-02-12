const Persona = ({ persona, onDelete }) => {
    return (
        <li key={persona.id} className="person">
            {persona.name} : {persona.number}
            <button onClick={() => onDelete(persona.id)}>Eliminar</button>
        </li>
    )
}
export default Persona