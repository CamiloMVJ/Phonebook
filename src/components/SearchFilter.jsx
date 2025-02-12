const SearchFilter = ({ searchEvent, busqValue, changeSearchEvent }) => {
    return (
        <div className="container">
            <form onSubmit={searchEvent}>
                <div>
                    <label>Nombre: </label><input type="text" value={busqValue} onChange={changeSearchEvent} />
                    <button type="submit" className="bigButton">Buscar</button>
                </div>
            </form>
        </div>
    )
}
export default SearchFilter