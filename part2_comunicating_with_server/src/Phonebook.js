import { useState } from 'react'



const PersonsDisplay = ({persons}) => {

    return (
        <div>
            <ul>
            {persons.map((person) =>{
              return <li key = {person.id}>{person.name}</li>
             })}
            </ul>
        </div>
    )

}


const Phonebook = () => {
  const [persons, setPersons] = useState([
    { 
        id: 1,
        name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handlePhonebookSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
        id: persons.length + 1,
        name: newName
    }

    setPersons([...persons, newPerson])
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePhonebookSubmit}>
        <div>
          name: <input type="text" onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonsDisplay persons={persons}/>
    </div>
  )
}

export default Phonebook