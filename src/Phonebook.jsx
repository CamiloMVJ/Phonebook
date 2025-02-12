import { useState, useEffect } from "react"
import Lista from './components/Lista'
import FormNewPerson from "./components/FormNewPerson"
import SearchFilter from "./components/SearchFilter"
import phoneService from './services/Phonebook'
import Notification from './components/Notification'
import './index.css'

const Button = (props) => {
    const { onClick, text } = props
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
}



const Phonebook = () => {
    const [personas, setPersonas] = useState([
        // { name: 'Arto Hellas', number: '040-123456', id: 1 },
        // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [personasMostrar, setPersonasMostrar] = useState(personas)
    const [busqueda, setBusqueda] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        phoneService.getAll().then(response => {
            setPersonas(response.data)
            setPersonasMostrar(response.data)
        })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const newUser = newName.trim()
        const newNum = `${newNumber.substring(0, 4)}-${newNumber.substring(4, 8)}`
        if (personas.find(person => person.name === newUser)) {
            if (window.confirm(`${newUser} ya se encuentra en la lista, desea actualizar su numero?`)) {
                const persona = personas.find(person => person.name === newUser)
                const updatedPersona = { ...persona, number: newNum }
                phoneService.update(persona.id, updatedPersona).then(() => {
                    setNewName('')
                    setNewNumber('')
                    setPersonas(personas.map(person => person.id !== persona.id ? person : updatedPersona))
                    setPersonasMostrar(personas.map(person => person.id !== persona.id ? person : updatedPersona))
                })
            }
        }
        else {
            let newid = personas.length
            while (personas.find(person => person.id == newid))
                newid++

            const item = {
                id: newid.toString(),
                name: newUser,
                number: newNum
            }
            phoneService.create(item).then(response => {
                if (response.status === 201) {
                    setPersonas(personas.concat(item))
                    setPersonasMostrar(personas.concat(item))
                    setNewName('')
                    setNewNumber('')
                    alert('Nueva persona agregada')
                }
            })
        }
    }

    const searchByName = (event) => {
        event.preventDefault()
        const name = busqueda.trim()
        const result = (name === '') ? name : personas.find(person => person.name.includes(name))
        console.log(result)
        if (!result) {
            setErrorMessage(`No se ha encontrado a "${name}" en la lista`)
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000);
        }
        else {
            setPersonasMostrar([result])
            setBusqueda('')
        }
    }
    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        // console.log(event.target.value)
        if (!(event.target.value.length > 8)) {
            setNewNumber(event.target.value)
        }
    }
    const handleSearchChange = (event) => {
        setBusqueda(event.target.value)
    }
    const ShowAll = () => {
        setPersonasMostrar(personas)
    }

    const DeleteNum = id => {
        // console.log(`Eliminando a ${id}`)
        const persona = personas.find(person => person.id === id)
        if (window.confirm(`Desea eliminar a ${persona.name}?`)) {
            phoneService.deletePerson(id).then(response => {
                const newPersonas = personas.filter(person => person.id !== id)
                if (response.status === 204) {
                    setPersonas(newPersonas)
                    setPersonasMostrar(newPersonas)
                    // console.log('Persona eliminada')
                }
                else {
                    console.log(response)
                }
            })
        }
    }
    return (
        <div className="screen">
            <h1>Phonebook</h1>
            <Notification message={errorMessage} />
            <SearchFilter
                searchEvent={searchByName}
                busqValue={busqueda}
                changeSearchEvent={handleSearchChange}
            ></SearchFilter>
            <br />
            <FormNewPerson
                submitEvent={addPerson}
                nameEvent={handleNameChange}
                numberEvent={handleNumberChange}
                nameValue={newName}
                numberValue={newNumber}
            >\</FormNewPerson>
            <h2>Numeros</h2>
            <button onClick={ShowAll}>Mostrar todo</button>

            <Lista lista={personasMostrar} onDelete={DeleteNum}></Lista>
        </div>
    )
}

export default Phonebook