import ReactDOM from 'react-dom/client'
import './index.css'
import Phonebook from './Phonebook'
import { StrictMode } from 'react'

let counter = 1
const refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <Phonebook />)
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Phonebook />
    </StrictMode>
)