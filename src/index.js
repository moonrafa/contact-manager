import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { useState } from 'react'
import './styles.css'

function AddPersonForm(props) {
  const [person, setPerson] = useState('')

  function handleChange(e) {
    setPerson(e.target.value)
  }

  function handleSubmit(e) {
    if (person !== '') {
      props.handleSubmit(person)
      setPerson('')
    }
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  )
}

function PeopleList(props) {
  const arr = props.data
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
  return <ul>{listItems}</ul>
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data)

  function addPerson(name) {
    setContacts([...contacts, name])
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  )
}
const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
