const FormNewPerson = ({ submitEvent, nameEvent, numberEvent, nameValue, numberValue }) => {
    return (
        <div className="container">
            <form onSubmit={submitEvent}>
                <div>
                    <label>Nombre: </label><input type="text" value={nameValue} onChange={nameEvent} />
                    <br />
                    <label>Numero: </label><input type="number" value={numberValue} onChange={numberEvent} />
                    <button type="submit" className="bigButton">Añadir</button>
                </div>
            </form>
        </div>

    )
}
export default FormNewPerson