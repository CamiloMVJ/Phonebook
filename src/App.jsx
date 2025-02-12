import {useState} from 'react'
const App = () =>{
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Display counter = {counter}/>
      <Button onClick = {() => setCounter(counter + 1)} text = 'Plus'/>
      <Button onClick = {() => setCounter(counter - 1)} text = 'Minus'/>
      <Button onClick = {() => setCounter(0)} text = 'Reset'/>
    </div>
  )
}

const Display = ({counter}) => <div> {counter} </div>

const Button = (props) =>{
  const {onClick, text} = props
  return(
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}
export default App
/* Eventos y buttons
import {useState} from 'react'
const App = () =>{
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        Plus
      </button>
      <button onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  )
} */
/* Repetir un metodo en un intervalo
import {useState} from 'react'
const App = () =>{
  const [counter, setCounter] = useState(0)
  setTimeout(() => setCounter(counter + 1), 1000)

  return(
    <div>{counter}</div>
  )
}*/
/* Destructuring y props
const App = (props) => {
  return(
    <>
      <p>try number: {props.counter}</p>
      <Hello name = 'Camilo' age = {19} />
    </>
  )
}

const Hello = (props) => {
  const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age
  return(
    <>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  )
}*/
 /* Ejemplo partes de la pagina
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header name = {course}/>

      <Content name = {part1} number = {exercises1} />
      <Content name = {part2} number = {exercises2} />
      <Content name = {part3} number = {exercises3} />

      <Total a = {exercises1} b = {exercises2} c = {exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part name = {props.name} number = {props.number}/>
    </>
  )
}
const Part = (props) =>{
  return(
    <>
      <p>{props.name}: {props.number}</p>
    </>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises: {props.a + props.b + props.c}</p>
  )
} */
