import axios from "axios"
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
// dotenv.config({path: '../../.env'})

const baseUrl = "http://localhost:3001/persons"
const supabase = createClient('https://ieozatljukwgdhkwfyyz.supabase.co', import.meta.env.VITE_SUPABASE_KEY)

const getAll = () => {
    return supabase.from('phonebook').select('')
    // return axios.get(baseUrl)
    //     .then(response => response.data)
}

const create = (newObject) => {
    return supabase.from('phonebook').insert(newObject)
    // return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return supabase.from('phonebook').update(newObject).eq('id', id)
    // return axios
    //     .put(`${baseUrl}/${id}`, newObject)
    //     .then(response => response.data)
}

const deletePerson = (id) => {
    return supabase.from('phonebook').delete().eq('id', id)
    // return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deletePerson }